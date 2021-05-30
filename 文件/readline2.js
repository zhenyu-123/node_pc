let readline = require("readline");
let { writefs } = require("./RandW.js");
var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Question(title) {
  return new Promise((resolve,reject) => {
    // node 自带
    r1.question(title, function (answer) {
        resolve(answer)
    });
  });
}

async function createPackage() {
  let name = await Question("你的包名叫什么");
  let description = await Question("你的包如何描述");
  let main = await Question("你的包主程序入口是什么");
  let author = await Question("作者是谁");
  let content = `
  {
    "name": "${name}",
    "version": "1.0.0",
    "description": "${description}",
    "main": "${main}",
    "scripts": {
      "test": "echo 'Error: no test specified' && exit 1"
    },
    "keywords": [],
    "author": "${author}",
    "license": "ISC"
  }
  `;
  await writefs("package2.json", content);
  r1.close();
}
createPackage();
r1.on("close", function() {
  process.exit(0);
});
