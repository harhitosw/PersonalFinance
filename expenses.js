// global variables
// Variable that sums the current expense
let sum = 0
let totalMoney = 0


// Function for collapse buttons
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}


// Put the date with the current month/year
document.querySelector("#date").valueAsDate = new Date();

// Reading the balance's localStorage data; if it does not exist, the value of 0 is assigned to the variable
let compareDate = document.querySelector("#date").value
if (localStorage.getItem('money')) {
  money = JSON.parse(localStorage.getItem('money'))
} else {
  money = 0
}

// Expenses localStorage reading; it is compared if the selected date exists in the expenses; if it exists it is loaded otherwise an empty array is assigned
let expenses = [];
if (localStorage.getItem('expenses')) {
  expenses = JSON.parse(localStorage.getItem('expenses'))

  for (let i = 0; i < expenses.length; i++) {
    const savedItem = expenses[i]

    if (savedItem.date === compareDate) {

      document.getElementById("actualFood").value = savedItem.generalFood
      document.querySelector("#actualAwayFood").value = savedItem.restaurant
      document.querySelector("#actualCin").value = savedItem.movies
      document.querySelector("#actualSport").value = savedItem.sports
      document.querySelector("#actualGym").value = savedItem.gym
      document.querySelector("#actualOut").value = savedItem.nightOut
      document.querySelector("#actualTrip").value = savedItem.trip
      document.querySelector("#actualElect").value = savedItem.electricity
      document.querySelector("#actualWater").value = savedItem.water
      document.querySelector("#actualRent").value = savedItem.rent
      document.querySelector("#actualNet").value = savedItem.internet
      document.querySelector("#actualOtherPay").value = savedItem.otherHousePay
      document.querySelector("#actualPharm").value = savedItem.pharm
      document.querySelector("#actualDoctor").value = savedItem.doctor
      document.querySelector("#actualOtherHealth").value = savedItem.otherHealthPay
      document.querySelector("#actualFuel").value = savedItem.fuel
      document.querySelector("#actualMaintenance").value = savedItem.carMaintenance
      document.querySelector("#actualInsurance").value = savedItem.carInsurance
      document.querySelector("#actualCarFine").value = savedItem.carFine
    }
  }

} else {
  expenses = []
}


//Button to save expenses
saveButton.addEventListener("click", function () {

//Calculation of general power
  let generalFood = +document.querySelector("#geneFood").value
  let actF = +document.querySelector("#actualFood").value
  sum = actF + generalFood
  document.querySelector("#actualFood").value = sum

  // Calculation of restaurant expenses
  let awayFood = +document.querySelector("#awayFood").value
  let actAFood = +document.querySelector("#actualAwayFood").value
  sum = actAFood + awayFood
  document.querySelector("#actualAwayFood").value = sum

 
// Calculation of cinema expenses
  let movies = +document.querySelector("#cinema").value
  let actMovies = +document.querySelector("#actualCin").value
  sum = actMovies + movies
  document.querySelector("#actualCin").value = sum

  // Calculation of sports expenses
  let sports = +document.querySelector("#sport").value
  let actSports = +document.querySelector("#actualSport").value
  sum = actSports + sports
  document.querySelector("#actualSport").value = sum

 // Gym cost calculation
  let gym = +document.querySelector("#gym").value
  let actGym = +document.querySelector("#actualGym").value
  sum = actGym + gym
  document.querySelector("#actualGym").value = sum

 
// Calculation of outgoing expenses
  let nightOut = +document.querySelector("#nightOut").value
  let actOut = +document.querySelector("#actualOut").value
  sum = actOut + nightOut
  document.querySelector("#actualOut").value = sum

  
// Calculation of travel expenses
  let trip = +document.querySelector("#trip").value
  let actTrip = +document.querySelector("#actualTrip").value
  sum = actTrip + trip
  document.querySelector("#actualTrip").value = sum

  
// Calculation of electricity expenses
  let elect = +document.querySelector("#elect").value
  let actElect = +document.querySelector("#actualElect").value
  sum = actElect + elect
  document.querySelector("#actualElect").value = sum

  // Calculation of water costs
  let water = +document.querySelector("#water").value
  let actWater = +document.querySelector("#actualWater").value
  sum = actWater + water
  document.querySelector("#actualWater").value = sum

  
// Calculation of income expenses
  let rent = +document.querySelector("#rent").value
  let actInc = +document.querySelector("#actualRent").value
  sum = actInc + rent
  document.querySelector("#actualRent").value = sum

  // Cálculo gastos da Internet
  let net = +document.querySelector("#net").value
  let actNet = +document.querySelector("#actualNet").value
  sum = actNet + net
  document.querySelector("#actualNet").value = sum

  // Cálculo de outros gastos 
  let otherPay = +document.querySelector("#otherPay").value
  let actOther = +document.querySelector("#actualOtherPay").value
  sum = actOther + otherPay
  document.querySelector("#actualOtherPay").value = sum

  // Cálculo de gastos em farmácia
  let pharm = +document.querySelector("#pharm").value
  let actualPharm = +document.querySelector("#actualPharm").value
  sum = actualPharm + pharm
  document.querySelector("#actualPharm").value = sum

  // Cálculo dos gastos em consultas
  let doctor = +document.querySelector("#doctor").value
  let actualDoctor = +document.querySelector("#actualDoctor").value
  sum = actualDoctor + doctor
  document.querySelector("#actualDoctor").value = sum

  // Cálculo de outros gastos na saúde
  let otherHealth = +document.querySelector("#otherHealth").value
  let actualOtherHealth = +document.querySelector("#actualOtherHealth").value
  sum = actualOtherHealth + otherHealth
  document.querySelector("#actualOtherHealth").value = sum

  // Cálculo do combustível
  let fuel = +document.querySelector("#fuel").value
  let actualFuel = +document.querySelector("#actualFuel").value
  sum = actualFuel + fuel
  document.querySelector("#actualFuel").value = sum

  // Cálculo dos gastos em manutenção
  let maintenance = +document.querySelector("#maintenance").value
  let actualMaintenance = +document.querySelector("#actualMaintenance").value
  sum = actualMaintenance + maintenance
  document.querySelector("#actualMaintenance").value = sum

  // Cálculo dos gastos em seguro
  let insurance = +document.querySelector("#insurance").value
  let actualInsurance = +document.querySelector("#actualInsurance").value
  sum = actualInsurance + insurance
  document.querySelector("#actualInsurance").value = sum

  // Cálculo dos gastos em multas
  let carFine = +document.querySelector("#carFine").value
  let actualCarFine = +document.querySelector("#actualCarFine").value
  sum = actualCarFine + carFine
  document.querySelector("#actualCarFine").value = sum

  let foundDate = false;
  let savedItem;
  let compareDate = document.querySelector("#date").value;

  // Ciclo que compara se a data escolhida já existe no localstorage; se existir substitui os dados, senão cria uns novos
  for (let i = 0; i < expenses.length; i++) {
    savedItem = expenses[i];

    if (savedItem.date === compareDate) {
      saveItem(savedItem);
      foundDate = true;
    }
  }

  if (!foundDate) {
    let newExpense = {};
    saveItem(newExpense, foundDate);
  }

  total = generalFood + awayFood + movies + sports + gym + nightOut + trip + elect + water + rent + net + otherPay + pharm + doctor + otherHealth + fuel + maintenance + insurance + carFine
  money = money - total
  localStorage.setItem('money', JSON.stringify(money))
  location.reload();
})

// Função que guarda os valores no localstorage, se a data não existir é criado uma lista de despesas nova
function saveItem(savedItem, foundDate = true) {
  savedItem.date = document.querySelector("#date").value;
  savedItem.generalFood = +document.querySelector("#actualFood").value
  savedItem.restaurant = +document.querySelector("#actualAwayFood").value
  savedItem.electricity = +document.querySelector("#actualElect").value
  savedItem.water = +document.querySelector("#actualWater").value
  savedItem.rent = +document.querySelector("#actualRent").value
  savedItem.internet = +document.querySelector("#actualNet").value
  savedItem.otherHousePay = +document.querySelector("#actualOtherPay").value
  savedItem.movies = +document.querySelector("#actualCin").value
  savedItem.sports = +document.querySelector("#actualSport").value
  savedItem.gym = +document.querySelector("#actualGym").value
  savedItem.nightOut = +document.querySelector("#actualOut").value
  savedItem.trip = +document.querySelector("#actualTrip").value
  savedItem.pharm = +document.querySelector("#actualPharm").value
  savedItem.doctor = +document.querySelector("#actualDoctor").value
  savedItem.otherHealthPay = +document.querySelector("#actualOtherHealth").value
  savedItem.fuel = +document.querySelector("#actualFuel").value
  savedItem.carMaintenance = +document.querySelector("#actualMaintenance").value
  savedItem.carInsurance = +document.querySelector("#actualInsurance").value
  savedItem.carFine = +document.querySelector("#actualCarFine").value

  if (!foundDate) {
    expenses[expenses.length] = savedItem;
  }

  localStorage.setItem("expenses", JSON.stringify(expenses))
}

// Função que vai meter os inputs todos a zero se nao existir a data no localstorage
function resetValues() {
  let elements = document.querySelectorAll("input[type=number]")

  for (var i = 0, element; element = elements[i++];) {
    element.value = 0;
  }
}

// Função para ler os dados no localstorage
function loadData(savedItem) {
  document.getElementById("actualFood").value = savedItem.generalFood
  document.querySelector("#actualAwayFood").value = savedItem.restaurant
  document.querySelector("#actualCin").value = savedItem.movies
  document.querySelector("#actualSport").value = savedItem.sports
  document.querySelector("#actualGym").value = savedItem.gym
  document.querySelector("#actualOut").value = savedItem.nightOut
  document.querySelector("#actualTrip").value = savedItem.trip
  document.querySelector("#actualElect").value = savedItem.electricity
  document.querySelector("#actualWater").value = savedItem.water
  document.querySelector("#actualRent").value = savedItem.rent
  document.querySelector("#actualNet").value = savedItem.internet
  document.querySelector("#actualOtherPay").value = savedItem.otherHousePay
  document.querySelector("#actualPharm").value = savedItem.pharm
  document.querySelector("#actualDoctor").value = savedItem.doctor
  document.querySelector("#actualOtherHealth").value = savedItem.otherHealthPay
  document.querySelector("#actualFuel").value = savedItem.fuel
  document.querySelector("#actualMaintenance").value = savedItem.carMaintenance
  document.querySelector("#actualInsurance").value = savedItem.carInsurance
  document.querySelector("#actualCarFine").value = savedItem.carFine
}
let dataPick = document.getElementById("date");

// Função que: ou mete os valores dos inputs a zero, ou lê os dados do localstorage caso existam
dataPick.onchange = function () {

  let foundDate = false;
  let savedItem;
  let compareDate = document.querySelector("#date").value;
  for (let i = 0; i < expenses.length; i++) {
    savedItem = expenses[i];

    if (savedItem.date === compareDate) {
      foundDate = true;
      break;
    }
  }

  if (!foundDate)
    resetValues();
  else
    loadData(savedItem);
}