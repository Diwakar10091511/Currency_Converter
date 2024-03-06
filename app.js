const convert = () => {
let inputField = document.querySelector("#inputField");
let amt = inputField.value;
console.log(amt);
}



let btn = document.querySelector("#submitbtn");
btn.addEventListener("click",(evt) => {
evt.preventDefault();
convert(); 
});










// const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
// // const para1 = document.querySelector("#fact");
// let data;
// let country = "USD"
// const getFacts = async () => {
//     console.log("feting...")
//     let promise = await fetch(url);
//     data = await promise.json();
//     console.log(promise);
//     console.log(data);
//     // para1.innerText = data[0].text;
//     console.log(data[country.toLowerCase()]);
//     console.log("fetched...")
// } 

// const getFacts2 = () => {
//     console.log("feting...")
//     let promise = fetch(url);
//     console.log(promise);
//     console.log("fetched...")
// } 

