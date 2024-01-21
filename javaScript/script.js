// making the mobile navigation work
const header = document.querySelector(".header");
const labelCloseMenu = document.querySelector(".close");
const labelOpenMenu = document.querySelector(".open");
labelCloseMenu.addEventListener("click", function () {
  header.classList.remove("nav-open");
});
labelOpenMenu.addEventListener("click", function () {
  header.classList.add("nav-open");
});

// make the year updated for every year
const year = document.querySelector(".year");
const date = new Date();
year.textContent = date.getFullYear();

// make smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    // scroll back to top
    if (targetId === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    // scroll to other sections or links
    if (targetId !== "#" && targetId.startsWith("#")) {
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    // close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.remove("nav-open");
    }
  });
});

// making a stiky navigation bar that starts after the hero section.
const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const entery = entries[0];
    console.log(entery);
    if (entery.isIntersecting === false) {
      document.body.classList.add("stiky");
    }
    if (entery.isIntersecting === true) {
      document.body.classList.remove("stiky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
