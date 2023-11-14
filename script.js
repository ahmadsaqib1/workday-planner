document.addEventListener("DOMContentLoaded", function () {
  //  Display current date and time
  function displayDateTime() {
    let currentDay = dayjs().format("dddd, MMMM D, YYYY");
    document.getElementById("currentDay").textContent = currentDay;
  }

  // Save user input to local storage
  $(".saveBtn").on("click", function () {
    let timeBlockId = $(this).parent().attr("id");
    let userText = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockId, userText);
  });

  // Load saved user input from local storage
  function loadSavedData() {
    for (let i = 9; i <= 17; i++) {
      let timeBlockId = i < 10 ? "0" + i : "" + i;
      let savedText = localStorage.getItem(timeBlockId);
      $("#text-" + timeBlockId).val(savedText);
    }
  }

  function updateBlockColors() {
    let currentHour = dayjs().hour();
    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id"));
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $("#text-" + currentHour).val("Current Hour");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  // Call functions on page load
  displayDateTime();
  loadSavedData();
  updateBlockColors();

  // Update time block colors every minute
  setInterval(updateBlockColors, 60000);
});
