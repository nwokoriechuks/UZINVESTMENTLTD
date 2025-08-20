// Sticky navbar shadow
window.addEventListener("scroll", function () {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

//M0bile navbar toggle  
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle){
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

// Back to top button
const topBtn = document.getElementById("backToTop");
if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
  });
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Accordion (About page)
const accHeaders = document.querySelectorAll(".accordion-header");
accHeaders.forEach(header => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const body = header.nextElementSibling;
    body.style.display = body.style.display === "block" ? "none" : "block";
  });
});

// Testimonial slider (About page)
let testimonials = document.querySelectorAll(".testimonial");
let index = 0;
setInterval(() => {
  testimonials.forEach(t => t.classList.remove("active"));
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}, 4000);

// Pattern + Theme switching
const footer = document.getElementById("main_footer");
const navbar = document.getElementById("navbar");
const select = document.getElementById("patternSelect");
const themeSelect = document.getElementById("themeSelect");

const savedPattern = localStorage.getItem("footerPattern");
const savedTheme = localStorage.getItem("siteTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeSelect.value = "dark";
} else if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeSelect.value = "light";
} else {
  themeSelect.value = "pattern";
  if (savedPattern) {
    footer.className = savedPattern;
    navbar.className = savedPattern.replace("pattern", "nav");
    select.value = savedPattern;
  } else {
    navbar.className = "nav-linen";
  }
}

themeSelect.addEventListener("change", function () {
  document.body.classList.remove("dark-mode", "light-mode");
  if (this.value === "dark") {
    document.body.classList.add("dark-mode");
    localStorage.setItem("siteTheme", "dark");
  } else if (this.value === "light") {
    document.body.classList.add("light-mode");
    localStorage.setItem("siteTheme", "light");
  } else {
    footer.className = select.value;
    navbar.className = select.value.replace("pattern", "nav");
    localStorage.setItem("siteTheme", "pattern");
  }
});

select.addEventListener("change", function () {
  if (themeSelect.value === "pattern") {
    footer.className = this.value;
    navbar.className = this.value.replace("pattern", "nav");
    localStorage.setItem("footerPattern", this.value);
  }
});
