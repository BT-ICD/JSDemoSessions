function getFullName() {
  var firstName = document.getElementById("firstName");
  var middleName = document.getElementById("middleName");
  var lastName = document.getElementById("lastName");
  var fullName = document.getElementById("fullName");
  var result = firstName.value + " " + middleName.value + " " + lastName.value;
  fullName.value = result;
}
