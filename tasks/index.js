import fs from 'fs';

// Uma array para guardar todas nossas tasks
let tasks = [];

fs.readdirSync(__dirname)

  // Queremos apenas os arquivos que terminam com -task.js
  .filter((file) => file.match(/-task.\js/i))
  .forEach((file) => {
    System.import(`./${file}`)
      .then((module) => {
        console.log(module);
        tasks.push(module);
      });
  });

export default tasks;
