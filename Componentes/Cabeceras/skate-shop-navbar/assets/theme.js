// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".js-mobile-toggle")
  const mobileMenu = document.querySelector(".js-mobile-menu")

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      document.body.classList.toggle("mobile-menu-open")
    })
  }

  // Product image gallery
  const productThumbs = document.querySelectorAll(".js-product-thumb")
  const productMainImage = document.querySelector(".js-product-main-image")

  if (productThumbs.length && productMainImage) {
    productThumbs.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        const newSrc = this.getAttribute("data-full-image")
        const newAlt = this.querySelector("img").getAttribute("alt")

        productMainImage.setAttribute("src", newSrc)
        productMainImage.setAttribute("alt", newAlt)

        // Remove active class from all thumbs
        productThumbs.forEach((t) => t.classList.remove("active"))

        // Add active class to clicked thumb
        this.classList.add("active")
      })
    })
  }

  // Quantity selector
  const quantitySelectors = document.querySelectorAll(".js-quantity-selector")

  if (quantitySelectors.length) {
    quantitySelectors.forEach((selector) => {
      const decreaseBtn = selector.querySelector(".js-quantity-decrease")
      const increaseBtn = selector.querySelector(".js-quantity-increase")
      const input = selector.querySelector("input")

      if (decreaseBtn && increaseBtn && input) {
        decreaseBtn.addEventListener("click", () => {
          const value = Number.parseInt(input.value)
          if (value > 1) {
            input.value = value - 1
          }
        })

        increaseBtn.addEventListener("click", () => {
          const value = Number.parseInt(input.value)
          input.value = value + 1
        })
      }
    })
  }
})

