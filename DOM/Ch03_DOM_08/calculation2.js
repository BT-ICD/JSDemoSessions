function getResult(action) {
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var answer = document.getElementById('answer');
    var result = 0;
    switch (action) {
        case 1:
            result = Number(value1.value) + Number(value2.value);
            break;
        case 2:
            result = Number(value1.value) - Number(value2.value);
            break;
        case 3:
            result = Number(value1.value) * Number(value2.value);
            break;
        case 4:
            result = Number(value1.value) / Number(value2.value);
            break;
        case 5:
            result = Number(value1.value) % Number(value2.value);
            break;
        case 6:
            result = Number(value1.value) ** Number(value2.value);
            break;
        default:
    }
    answer.value=result;
}