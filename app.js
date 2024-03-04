const url = "https://cat-fact.herokuapp.com/facts"
const para1 = document.querySelector("#fact");
let data;
const getFacts = async () => {
    console.log("feting...")
    let promise = await fetch(url);
    data = await promise.json();
    console.log(promise);
    console.log(data);
    para1.innerText = data[0].text;
    console.log("fetched...")
} 

const getFacts2 = () => {
    console.log("feting...")
    let promise = fetch(url);
    console.log(promise);
    console.log("fetched...")
} 

