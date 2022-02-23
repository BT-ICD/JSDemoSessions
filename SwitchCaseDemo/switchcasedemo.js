let resultButton = document.getElementById('resultButton');
let result = document.getElementById('result');

let weekdaynum = document.getElementById('weekdaynum');
resultButton.addEventListener('click', getResult);
function getResult() {
    let n = parseInt(weekdaynum.value);
    switch (n) {
        case 1:
            result.value = "Monday"
            break;
        case 2:
            result.value = "Tuesday"
            break;
        case 3:
            result.value = "Wednesday"
            break;
        case 4:
            result.value = "Thursday"
            break;
        case 5:
            result.value = "Friday"
            break;
        case 6:
            result.value = "Saturday"
            break;
        case 7:
            result.value = "Sunday"
            break;
        default:
            result.value = "Please enter value between 1 and 7";

    }
}

