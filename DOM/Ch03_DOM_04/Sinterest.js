function getInterest() {
    let principal = document.getElementById('principal')
    let rate = document.getElementById('rate');
    let years = document.getElementById('years');
    let interest = document.getElementById('interest');
    let amount = document.getElementById('amount');

    let resultInterest = (principal.value * rate.value * years.value) / 100;
    //Conversion into number
    let resultAmount = Number(principal.value) + Number(resultInterest);

    interest.value = resultInterest;
    amount.value = resultAmount;
}