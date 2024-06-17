(function () {
  // Define what time is in relation to milleseconds
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;


  let today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"),
  yyyy = today.getFullYear(),
  nextYear = yyyy + 1, // This resets the timer every year
  dayMonth = "08/17/",  // The date you whant the contdown to end
  birthday = dayMonth + yyyy + " 00:00:00"; // the time you whant the countdown to end

  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / day),
          document.getElementById("hours").innerText = Math.floor((distance % day) / hour),
          document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute),
          document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        // Convert milliseconds to days for comparison
        const daysRemaining = Math.floor(distance / day);

        // Check if remaining time is less than or equal to 0 days
        if (distance <= 0 || daysRemaining > 364) {
          document.getElementById("headline").innerText = "School is Over!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0);

  // Show/hide fullscreen button and cursor in fullscreen mode
  document.addEventListener('fullscreenchange', function() {
    const fullscreenButton = document.getElementById('fullscreen-button');
    if (document.fullscreenElement) {
      fullscreenButton.style.display = 'none';
      document.body.style.cursor = 'none';
    } else {
      fullscreenButton.style.display = 'block';
      document.body.style.cursor = 'auto';
    }
  });

}());

function toggle_fullscreen() {
  if (!document.fullscreenElement) {
    document.body.requestFullscreen();
    document.body.setAttribute("fullscreen",""); 
  } else {
    document.exitFullscreen();
    document.body.removeAttribute("fullscreen"); 
  }
}