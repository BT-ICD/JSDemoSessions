let txtNumeric = document.getElementById("txtNumeric");

txtNumeric.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(event.code);
  switch (event.code) {
    case "Digit1":
    case "Digit2":
    case "Digit3":
    case "Digit4":
    case "Digit5":
    case "Digit6":
    case "Digit7":
    case "Digit8":
    case "Digit9":
    case "Digit0":
    case "Numpad0":
    case "Numpad1":
    case "Numpad2":
    case "Numpad3":
    case "Numpad4":
    case "Numpad5":
    case "Numpad6":
    case "Numpad7":
    case "Numpad8":
    case "Numpad9":
    case "Backspace":
    case "Delete":
    case "ArrowLeft":
    case "ArrowRight":
    case "ArrowUp":
    case "ArrowDown":
      break;
    case "Period":
    case "NumpadDecimal":
      if (txtNumeric.value.toString().indexOf(".") >= 0) {
        event.preventDefault();
      }
      break;
    case "Minus":
    case "NumpadSubtract":
    default:
      event.preventDefault();
  }
});
