const getTarefa = (name) => {
  const newTitle = document.getElementsByName("tarefa");
  return newTitle[0];
};
console.log(getTarefa());

/* 
const getInfoFromCep = async (getTarefa) => {
  try {
    const { data } = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`
    );
    return data;
  } catch (error) {
    alert(error);
  }
}; 
*/

/* 
window.onload = () => {
  const cepInput = getInput("cep");

  cepInput.addEventListener("input", async (event) => {
    
  }}; 
*/
