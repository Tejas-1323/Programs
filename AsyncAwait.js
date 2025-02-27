
const fetchData = async () => {

  try {

    let result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

fetchData()
