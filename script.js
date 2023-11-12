document.addEventListener("DOMContentLoaded", function () {
  //  Display current date and time
  function displayDateTime() {
    var currentDay = dayjs().format("dddd, MMMM D, YYYY");
    var currentTime = dayjs().format("hh:mm:ss A");
    document.getElementById("currentDay").textContent = currentDay;
    document.getElementById("time").textContent = currentTime;
  }

  displayDateTime();
});
