const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120); // Must revise this
});

function showHourlyRateInput() {
  var hiringOption = document.getElementById("hiringOption");
  var hourlyRateInput = document.getElementById("hourlyRateInput");

  if (hiringOption.checked) {
    hourlyRateInput.style.display = "block";
  } else {
    hourlyRateInput.style.display = "none";
  }
}