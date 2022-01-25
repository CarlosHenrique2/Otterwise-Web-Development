import fs from "fs";
import { writeFile } from "fs/promises";

/* 
   ler o arquivo lista.csv - feito
   tratar os dados - feito   
   salvar em json - feito

   saida esperada 
[
  { "id": 1, "name": "ketchup", "preco": "R$15,9" },
  { "id": 2, "name": "mostarda", "preco": "R$15,9" },
  { "id": 3, "name": "batata", "preco": "R$4,85" },
  { "id": 4, "name": "cebola", "preco": "R$3,15" }
]
*/

const csv = fs.readFileSync("./lista.csv", "utf8");

let dataFile = csv.split("\r\n");

const [header, ...files] = dataFile;

const newArray = files.map((line) => {
  const [id, name, preco] = line.split(",");
  return {
    id,
    name,
    preco: preco.replace("", "R$").replace(".", ","),
  };
});

console.log(typeof newArray);

const writingFile = await writeFile(
  "./convertCSVToJson.json",
  JSON.stringify(newArray)
);
