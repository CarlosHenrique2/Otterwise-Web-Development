/* import { multiply } from "./helpers.js"
import { formatDate } from "./date/formatters.js"

console.log(formatDate(new Date()));

console.log(multiply(2,2)); */

import { input } from "console.input";
import axios from "axios";
import fs from "fs";
import { info } from "console";

const inputCep = () => input("digite o cep");

const searchFromCep = async (cep) => {
  try {
    const { data } = await axios.get("");
    console.log(data);
  } catch (error) {
    console.log("ocorreu um erro");
  }
};

searchFromCep();

const saveJson = (infos, fileName) => {
  const parsedInfo = JSON.stringify(infos);
  fs.writeFileSync(fileName, parsedInfo);
};

const main = () => {
  const cep = inputCep();
  console.log(cep);
};

main();
