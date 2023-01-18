let resultButton = document.getElementById('resultButton');
let result = document.getElementById('result');

let weekdaynum = document.getElementById('weekdaynum');
resultButton.addEventListener('click', getResult);
function getResult() {
    let n = parseInt(weekdaynum.value);
    switch (n) {
        case 1:
            result.value = "Monday";
            console.log("Monday");
            break;
        case 2:
            result.value = "Tuesday";
            console.log("Tuesday");
            break;
        case 3:
            result.value = "Wednesday";
            console.log("Wednesday");
            break;
        case 4:
            result.value = "Thursday";
            console.log("Thursday");
            break;
        case 5:
            result.value = "Friday";
            console.log("Friday");
            break;
        case 6:
            result.value = "Saturday";
            console.log("Saturday");
            break;
        case 7:
            result.value = "Sunday";
            console.log("Sunday");
            break;
        default:
            result.value = "Please enter value between 1 and 7";

    }
}

