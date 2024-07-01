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

//////////////////////////////////////////////////////////////

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

