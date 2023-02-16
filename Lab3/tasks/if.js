let message;

if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}

// equals

let message2 =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
    let result;

//if (a + b < 4) {
//  result = 'Below';
//} else {
//  result = 'Over';
//}
//let result = (a + b < 4) ? 'Below' : 'Over';