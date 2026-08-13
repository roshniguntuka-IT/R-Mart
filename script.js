// Login / Signup

const loginBtn = document.getElementById("loginBtn");
const loginBox = document.getElementById("loginBox");
const loginClose = document.getElementById("loginClose");
const sendOtp = document.getElementById("sendOtp");
const mobileNumber = document.getElementById("mobileNumber");
const loginMessage = document.getElementById("loginMessage");

// Open login
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginBox.classList.add("active");
});

// Close login
loginClose.addEventListener("click", () => {
    loginBox.classList.remove("active");
});

// Send OTP
sendOtp.addEventListener("click", () => {

    const mobile = mobileNumber.value.trim();

    if (mobile.length !== 10 || isNaN(mobile)) {
        loginMessage.textContent = "Please enter a valid 10-digit mobile number.";
        loginMessage.style.color = "red";
        return;
    }

    loginMessage.textContent = "OTP sent successfully!";
    loginMessage.style.color = "#087f32";
});

// Search

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const productCards = document.querySelectorAll(".product-card");

searchBtn.addEventListener("click", () => {

    const searchText = searchInput.value.trim().toLowerCase();

    productCards.forEach((card) => {

        const productName = card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});

// Wishlist

const wishlistButtons = document.querySelectorAll(".wishlist");
const wishlistCount = document.querySelector(".header-links a:nth-child(2) span");

let wishlistItems = 0;

wishlistButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (button.classList.contains("liked")) {

            button.classList.remove("liked");
            button.textContent = "♡";
            wishlistItems--;

        } else {

            button.classList.add("liked");
            button.textContent = "♥";
            wishlistItems++;

        }

        wishlistCount.textContent = wishlistItems;
    });

});
// Product Details

const detailsButtons = document.querySelectorAll(".details-btn");
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalOldPrice = document.getElementById("modalOldPrice");
const modalDiscount = document.getElementById("modalDiscount");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");

const modalQuantity = document.getElementById("modalQuantity");
const modalMinus = document.getElementById("modalMinus");
const modalPlus = document.getElementById("modalPlus");

let quantity = 1;

detailsButtons.forEach((button) => {

    button.addEventListener("click", () => {

        modalImage.src = button.dataset.image;
        modalName.textContent = button.dataset.name;
        modalCategory.textContent = button.dataset.category;
        modalPrice.textContent = button.dataset.price;
        modalOldPrice.textContent = button.dataset.oldPrice;
        modalDiscount.textContent = button.dataset.discount;
        modalRating.textContent = button.dataset.rating;
        modalDescription.textContent = button.dataset.description;

        quantity = 1;
        modalQuantity.textContent = quantity;

        productModal.classList.add("active");
    });

});

modalClose.addEventListener("click", () => {
    productModal.classList.remove("active");
});

modalPlus.addEventListener("click", () => {
    quantity++;
    modalQuantity.textContent = quantity;
});

modalMinus.addEventListener("click", () => {

    if (quantity > 1) {
        quantity--;
        modalQuantity.textContent = quantity;
    }

});
// Cart and Buy Now

const modalCart = document.getElementById("modalCart");
const buyNow = document.getElementById("buyNow");

const cartCount = document.querySelector(
    ".header-links a:nth-child(3) span"
);

let cartItems = 0;

// Add to Cart
modalCart.addEventListener("click", () => {

    cartItems += quantity;

    cartCount.textContent = cartItems;

    alert(quantity + " item(s) added to cart!");

    productModal.classList.remove("active");
});


// Buy Now
buyNow.addEventListener("click", () => {

    alert(
        "Proceeding to checkout for " +
        quantity +
        " item(s)."
    );

});