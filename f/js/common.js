window.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  initHeaderColorChanger();
  initBurgerMenu();
  initFaqAccordions();
  initSubmitFormHandler();
}

function initHeaderColorChanger() {
  const header = document.querySelector(".header");

  function headerColorChanger() {
    const isPageScrolled =
      document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
    const isMobileDevice = window.innerWidth < 768;

    if (isPageScrolled && isMobileDevice) {
      header.classList.add("header_blue");
    } else {
      header.classList.remove("header_blue");
    }
  }

  window.addEventListener("scroll", headerColorChanger);
}

function initBurgerMenu() {
  let isBurgerOpen = false;
  const burgerMenuBtn = document.querySelector(".hamburger");
  const burgerMenu = document.querySelector(".burger-menu");
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const backdrop = document.querySelector(".backdrop");
  const burgerMenuLinks = document.querySelectorAll(".burger-menu__item");

  function burgerShowToggleHadnler() {
    if (isBurgerOpen) {
      isBurgerOpen = false;
      this.classList.remove("hamburger_open");
      burgerMenu.classList.remove("burger-menu_open");
      body.classList.remove("block-scroll");
      header.classList.remove("header_blue");
      backdrop.classList.remove("backdrop_show");
    } else {
      isBurgerOpen = true;
      this.classList.add("hamburger_open");
      burgerMenu.classList.add("burger-menu_open");
      body.classList.add("block-scroll");
      header.classList.add("header_blue");
      backdrop.classList.add("backdrop_show");
    }
  }

  function burgerCloseHandler() {
    isBurgerOpen = false;
    burgerMenuBtn.classList.remove("hamburger_open");
    burgerMenu.classList.remove("burger-menu_open");
    body.classList.remove("block-scroll");
    header.classList.remove("header_blue");
    backdrop.classList.remove("backdrop_show");
  }

  burgerMenuBtn.addEventListener("click", burgerShowToggleHadnler);
  backdrop.addEventListener("click", burgerCloseHandler);

  for (let i = 0; i < burgerMenuLinks.length; i++) {
    burgerMenuLinks[i].addEventListener("click", burgerCloseHandler);
  }
}

function initFaqAccordions() {
  const faqs = document.querySelectorAll(".faq__item");

  for (let i = 0; i < faqs.length; i++) {
    const toggleButton = faqs[i].querySelector(".faq__btn");
    const answer = faqs[i].querySelector(".faq__answer");

    function toggleFaqHandler() {
      this.classList.toggle("faq__btn_open");

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    }

    toggleButton.addEventListener("click", toggleFaqHandler);
  }
}

function initSubmitFormHandler() {
  const submitBtns = document.querySelectorAll('button[type="submit"]');

  function submitHandler(event) {
    event.preventDefault();
    alert("Тут будет какая-то логика");
  }

  for (let i = 0; i < submitBtns.length; i++) {
    submitBtns[i].addEventListener("click", submitHandler);
  }
}
