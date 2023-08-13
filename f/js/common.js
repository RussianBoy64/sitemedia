window.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  initFaqAccordions();
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
