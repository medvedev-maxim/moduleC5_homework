const parser = new DOMParser();

const xmlStr = `
<list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Сидр</first>
        <second>Сидоров</second>
    </name>
    <age>25</age>
    <prof>director</prof>
    </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlStr, "text/xml");
const listNode = xmlDOM.querySelectorAll("student");
console.log(listNode.length);

const result = {list:[]}

for(let i = 0; i < listNode.length; i++) {
  let nameNode = listNode[i].querySelector("name");
  let name = nameNode.querySelector("first").textContent + nameNode.querySelector("second").textContent;
  let age = Number(listNode[i].querySelector("age").textContent);
  let prof = listNode[i].querySelector("prof").textContent;
  let lang = nameNode.getAttribute('lang');
  let student = {
    name: name,
    age: age,
    prof: prof,
    lang: lang
  };
  result.list.push(student);
}

console.log(JSON.stringify(result));