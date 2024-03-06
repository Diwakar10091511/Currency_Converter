let BaseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let selection1 = document.querySelector("#fromCurrency");
let selection2 = document.querySelector("#toCurrency");
let inputField = document.querySelector("#inputField");
let textField = document.querySelector("#text");
let currency1 = selection1.value;
let currency2 = selection2.value;
let amt = inputField.value;
let textContent = "The converted currency is ";

const convert = async (url) => {
    console.log(url);
    let promise = await fetch(url);
    let data = await promise.json();
    console.log(data);
    let rate = data[currency1.toLowerCase()][currency2.toLowerCase()];
    let totalAmount = rate * amt;
    textField.textContent = `${textContent}${totalAmount}`;
    textField.style.backgroundColor = "#FFC374";
}

const startOperation = () => {
    amt = inputField.value;
    console.log(amt);
    currency1 = selection1.value;
    currency2 = selection2.value;
    let URL = `${BaseURL}${currency1.toLowerCase()}.json`;
    let rate = convert(URL);
    console.log(rate);
}






let btn = document.querySelector("#submitbtn");
btn.addEventListener("click",(evt) => {
evt.preventDefault();
startOperation(); 
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

