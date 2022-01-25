import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/";

const getposts = async () => {
    try {
        const response = await axios.get(url + "posts")
        console.log("posts", response.data);
    } catch (error) {
        console.log(error.messege);
    }
};

getposts()

const get = async () => {
    try {
        const response = await axios.get(url + "posts/1")
        console.log("GET", response.data);
    } catch (error) {
        console.log(error.messege);
    }
};

get();

