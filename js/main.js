const header = document.querySelector("header");
const sectionOne = document.querySelector(".index-carousel");
const sectionTwo = document.querySelector(".welcome-intro");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "20px 0px 0px 0px"
};

const sectionOneObersver = new IntersectionObserver(function(entries, sectionOneObersver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("navbar-scrolled");
      } else {
        header.classList.remove("navbar-scrolled");
      }
    });
},
 sectionOneOptions);





const sectionTwoOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionTwoObserver = new IntersectionObserver(function(
  entries,
  sectionTwoObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

