//student form validation using javascript
function validateForm() {

  let marks = document.getElementById("marks").value;
  let attendance = document.getElementById("attendance").value;
  let assignment = document.getElementById("assignment").value;
  let behaviour = document.getElementById("behaviour").value;

  if (marks < 0 || marks > 100 ||
      attendance < 0 || attendance > 100 ||
      assignment < 0 || assignment > 100 ||
      behaviour < 0 || behaviour > 10) {

      document.getElementById("msg").style.color = "red";
      document.getElementById("msg").innerText =
        "❌ Please enter valid values within allowed ranges!";
      return false;
  }

  if (attendance < 70) {
      alert("⚠ Low Attendance Warning!");
  }

  document.getElementById("msg").style.color = "green";
  document.getElementById("msg").innerText =
    "✅ Data validated successfully!";

  return true;
}
