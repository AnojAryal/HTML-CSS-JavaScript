function showDate() {
    var dateParagraph = document.getElementById('datep');
    var currentDate = new Date();
    dateParagraph.innerHTML = "Date: " + currentDate.toDateString();
    dateParagraph.style.display = "block";
  
    // Clear the message after 5 seconds
    setTimeout(function() {
      dateParagraph.innerHTML = "";
      dateParagraph.style.display = "none";
    }, 5000);
  }
  
  function showTime() {
    var timeParagraph = document.getElementById('timep');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
  
    timeParagraph.innerHTML = "Time: " + timeString;
    timeParagraph.style.display = "block";
  
    // Clear the message after 5 seconds
    setTimeout(function() {
      timeParagraph.innerHTML = "";
      timeParagraph.style.display = "none";
    }, 5000);
  }
  
  function formatTime(timeValue) {
    // Add leading zero to single-digit time values
    return timeValue < 10 ? "0" + timeValue : timeValue;
  }
    document.body.appendChild(alertDiv);
  
    setTimeout(function() {
      alertDiv.remove();
    }, 5000);
  
  