// back to top / icon
const toTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// nav / header

const navDown = document.querySelector(".nav__top");
if (navDown) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 950) {
      navDown.classList.add("active");
    } else {
      navDown.classList.remove("active");
    }
  })
}

// nav / courses

const toDown = document.querySelector(".courses__nav");
if (toDown) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 850) {
      toDown.classList.add("active");
    } else {
      toDown.classList.remove("active");

    }
  })
}

//nav / modal (myBtn) + (myBtnOverlay)

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the button that opens the modalOverlay
const btnOverlay = document.getElementById("myBtnOverlay");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
if (btn) {
  btn.onclick = function () {
    modal.style.display = "block";
  }
}

if (btnOverlay) {
  btnOverlay.onclick = function () {
    modal.style.display = "block";
    closeNav(); /* close overlay */
  }
}

// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  }
}
// When the user clicks anywhere outside of the modal, close it
if (window) {
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}



// overlay 

function openNav() {
  document.getElementById("myNav").style.width = "30%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



// Add active class to the current link (main page)
const header = document.getElementById("slots");
if (header) {
  const btns = header.getElementsByClassName("navbar__slot");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("navbar__slot--active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" navbar__slot--active", "");
      }
      this.className += " navbar__slot--active";
    });
  }
}

// Add active class to the current link (courses page)
const nav = document.getElementById("courses");
if (nav) {
  const link = nav.getElementsByClassName("courses__link");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("courses__link--active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" courses__link--active", "");
      }
      this.className += " courses__link--active";
    });
  }
}