function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);

}
showTime();





$(window).on('load', function () {
  setInterval(function () {
    // $("head title").fadeOut(300, function () {
    //   $(this).text($(this).text().substring(1) + $(this).text().substring(0, 1))
    //     .fadeIn(300);
    // });
  }, 300);

  let progressBar = $('.progress-bar');
  let progressValue = 0;
  let interval = setInterval(increaseProgress,
    50);

  function increaseProgress() {
    progressValue += 1;
    progressBar.css('width', progressValue + '%').attr('aria-valuenow', progressValue);
    $('.persentase').text(progressValue + '%');
    if (progressValue >= 100) {
      clearInterval(interval);
      $(".preloader").fadeOut("slow");
    }
  }
})

document.addEventListener('DOMContentLoaded', function () {
  // First toast after 10 seconds
  setTimeout(function () {
    var myToast = new bootstrap.Toast(document.querySelector('.toast'));
    myToast.show();

    // Close the first toast after 5 seconds
    setTimeout(function () {
      myToast.hide();
    }, 5000);
  }, 10000);

  // Second toast after 20 seconds (10 seconds after the first one)
  setTimeout(function () {
    var myToast = new bootstrap.Toast(document.querySelector('.toast'));
    myToast.show();

    // Close the second toast after 5 seconds
    setTimeout(function () {
      myToast.hide();
    }, 5000);
  }, 20000);
});




