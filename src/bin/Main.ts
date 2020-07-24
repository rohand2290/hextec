#!/usr/bin/env node
import fs from "fs";
import prettier from "prettier";
import cp from "child_process";
let args = process.argv.slice(2);
if (args[0] === "new") {
  if (args[1] != undefined) {
    fs.mkdirSync(`./${args[1]}/`);
    let packageJson: object = {
      name: args[1],
      version: `1.0.0`,
      scripts: {
        start: `node App.js`,
      },
    };
    let formattedJson: string = prettier.format(JSON.stringify(packageJson), {
      parser: "json",
    });
    fs.writeFileSync(`./${args[1]}/package.json`, formattedJson);
    try {
      process.chdir(`${process.cwd()}/${args[1]}`);
      cp.exec(`npm install --save hextec`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      fs.readFile(__dirname + "/template/App.js", function (err, data) {
        if (err) {
          console.error(err);
        } else {
          fs.writeFileSync(`./App.js`, data);
        }
      });
    } catch (err) {
      console.error("Error while changing directories");
    }
  } else {
    console.log("Error: name of application not specified");
  }
}
