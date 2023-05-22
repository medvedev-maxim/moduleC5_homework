const jsonStr = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;


const list = JSON.parse(jsonStr)

for(let i = 0; i < list.list.length; i++){
  list.list[i].age = Number(list.list[i].age);
}

console.log(JSON.stringify(list));