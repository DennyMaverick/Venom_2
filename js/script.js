$(function () {
  const menuButton = document.querySelector(".menu-button")
  const menu = document.querySelector(".nav-menu")
  const menuCloseButton = document.querySelector(".menu-close")
  const modalBtns = document.querySelectorAll(".modal-btn")
  const bodyEl = document.querySelector("body")
  const modalСloseBtns = document.querySelectorAll(".modal__close")
  const modals = document.querySelectorAll(".modal")

  // Открытие модального окна меню

  menuButton.addEventListener("click", function () {
    menu.classList.add("is-active")
    menuCloseButton.classList.add("is-active")
  })

  // Закрытие модального окна меню

  menuCloseButton.addEventListener("click", function () {
    menu.classList.remove("is-active")
    menuCloseButton.classList.remove("is-active")
  })

  // Универсальное открытие модальных окон

  modalBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault()

      const currentModalID = event.target.dataset.modal
      const currentModal = document.querySelector(currentModalID)

      const currentModalInner = currentModal.querySelector(".modal__inner")
      currentModal.classList.add("show")
      bodyEl.classList.add("no-scrolled")

      setTimeout(() => {
        currentModalInner.style.transform = "rotateX(0)"
      }, 1000)

      // Нахождение текущего слайдера

      let $this = $(this)
      let modalId = $this.data("modal")
      let currentSlider = $(modalId).find(".slider-actor")

      // Инициализация текущего слайдера при открытии модального окна
      currentSlider.slick({
        arrows: false,
        fade: true,
        adaptiveHeight: true,
      })
      // Листание слайдов вперед

      $(".slickPrev").on("click", function (event) {
        event.preventDefault()
        currentSlider.slick("slickPrev")
      })

      // Листание слайдов назад

      $(".slickNext").on("click", function (event) {
        event.preventDefault()
        currentSlider.slick("slickNext")
      })
    })
  })

  // Универсальное закрытие модальных окон

  modalСloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", function (event) {
      // Нахождение текущего слайдера

      let $this = $(this)
      const currentModalWindow = $this.closest(".modal")
      const currentSlider = $(currentModalWindow).find(".slider-actor")

      const currentModal = event.target.closest(".modal")
      const currentModalInner = currentModal.querySelector(".modal__inner")
      currentModalInner.style.transform = "rotateX(90deg)"
      setTimeout(() => {
        bodyEl.classList.remove("no-scrolled")
        currentModal.classList.remove("show")
        // Деициализация текущего слайдера при закрытии модального окна
        currentSlider.slick("unslick")
      }, 1000)
    })
  })

  // Универсальное закрытие модальных окон при клике вне модального окна

  modals.forEach((modal) => {
    modal.addEventListener("click", function () {
      let $this = $(this)
      const currentSlider = $($this).find(".slider-actor")

      const currentModalInner = this.querySelector(".modal__inner")
      currentModalInner.style.transform = "rotateX(90deg)"

      setTimeout(() => {
        bodyEl.classList.remove("no-scrolled")
        this.classList.remove("show")
        // Деициализация текущего слайдера при закрытии модального окна
        currentSlider.slick("unslick")
      }, 1000)
    })
  })

  /*отмена события клика родителя элемента (.modal)
  при клике на блок .modal__dialog окно не будет
  закрываться*/
  $(".modal__inner").on("click", function (event) {
    event.stopPropagation()
  })
})
