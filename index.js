// global variables
let currencyContainer = document.getElementById("converted")
let currency = document.getElementById("currency")
let selectedCurrency
let euroConvert = 0
let usdConvert = 0
let gbpConvert = 0

// Function that retrieves the currency values ​​from the API and assigns them to variables depending on the user's search
async function convert(value) {
    selectedCurrency = currency.options[currency.selectedIndex].text

    if (selectedCurrency === "EUR") {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?&symbols=USD,GBP`)
        myJson = await response.json()
        usdConvert = Math.floor(myJson.rates.USD * 100) * value / 100
        gbpConvert = Math.floor(myJson.rates.GBP * 100) * value / 100
        currencyContainer.innerHTML = `<div>USD:&nbsp;&nbsp;${usdConvert}</div><div>GBP:&nbsp;&nbsp;${gbpConvert}</div>`

    } else if (selectedCurrency === "USD") {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=EUR,GBP`)
        myJson = await response.json()
        euroConvert = Math.floor(myJson.rates.EUR * 100) * value / 100
        gbpConvert = Math.floor(myJson.rates.GBP * 100) * value / 100
        currencyContainer.innerHTML = `<div>EUR:&nbsp;&nbsp;${euroConvert}</div><div>GBP:&nbsp;&nbsp;${gbpConvert}</div>`

    } else {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=EUR,USD`)
        myJson = await response.json()
        euroConvert = Math.floor(myJson.rates.EUR * 100) * value / 100
        usdConvert = Math.floor(myJson.rates.USD * 100) * value / 100
        currencyContainer.innerHTML = `<div>EUR:&nbsp;&nbsp;${euroConvert}</div><div>USD:&nbsp;&nbsp;${usdConvert}</div>`
    }
}

// Button that will perform the function of converting the currency
doConversion.addEventListener("click", function () {
    let valueToConvert = +document.getElementById("valueToConvert").value
    convert(valueToConvert);
})

// Verification that the localStorage where the user's balance is saved exists; if it exists, it is loaded otherwise a new one is created with the value of 0
// Applies red color if it is negative and green color if it is positive or 0
let money = 0
if (localStorage.getItem('money')) {

    money = JSON.parse(localStorage.getItem('money'))
    document.querySelector("#currentMoney").value = money

    if (money >= 0) {
        document.querySelector(".middleInput").style.color = "green"
    } else {
        document.querySelector(".middleInput").style.color = "red"
    }
} else {
    money;
}

// Button that adds the user's balance; checks after adding if the balance is negative or positive
btnAddMoney.addEventListener("click", function () {

    let mon = document.querySelector("#currentMoney").value
    let addMoney = document.querySelector("#addMoney").value

    if (!addMoney) {
        addMoney = 0
    } else {
        sum = Number(mon) + Number(addMoney)
        document.querySelector("#currentMoney").value = sum

        money += parseInt(document.getElementById("addMoney").value)
        localStorage.setItem("money", JSON.stringify(money))

        if (money >= 0) {
            document.querySelector("#currentMoney").style.color = "green"
        } else {
            document.querySelector("#currentMoney").style.color = "red"
        }
        document.querySelector("#addMoney").value = null
    }
})