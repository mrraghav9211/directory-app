const arr = JSON.parse(localStorage.getItem("users")) || [];
function add() {
  var useName = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const aadhar = document.getElementById("aadhar").value;
  const age = document.getElementById("age").value;
  const mobile = document.getElementById("number").value;

  const person = {
    name: useName,
    dob: dob,
    aadhar: aadhar,
    age: age,
    mobile: mobile,
  };

  if (mobile.length === 10 && aadhar.length === 12) {
    arr.push(person);
    localStorage.setItem("users", JSON.stringify(arr));
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("aadhar").value = "";
    document.getElementById("age").value = "";
    document.getElementById("number").value = "";
    document.querySelector(".success").innerHTML =
      "Data uploaded successfully!";
  } else {
    alert("Mobile number should be 10 digit!");
  }
}
document.querySelector(".btn2").addEventListener("click", add);
console.log(arr);
