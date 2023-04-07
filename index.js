const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const counterDisplay = document.getElementById("counter-display");

minusBtn.addEventListener("click", function() {
    if (counterDisplay.textContent >= 1) {
        counterDisplay.textContent--;
        if (counterDisplay.textContent < 0) {
            counterDisplay.textContent = 0;
        }
    }
});

plusBtn.addEventListener("click", function() {
    counterDisplay.textContent++;
})

const addToCartBtn = document.getElementById("add-to-cart-btn");
const badge = document.getElementById("badge");
const modalBody = document.getElementById("modal-body");

addToCartBtn.addEventListener("click", function(e) {
    let quantity = counterDisplay.textContent;
    if (quantity >= 1) {
        badge.textContent = quantity;
        modalBody.innerHTML = `
        <img src="./images/image-product-1-thumbnail.jpg" class="rounded img-fluid float-start me-2" style="width:15%;">
        <p style="color:#69707D;">Fall Limited Edition Sneakers</p>
        <p style="color:#69707D;">$125.00 X <span id="quantity-display">${quantity}</span> <span id="total-display" color:"#000;"><strong>$${(e.target.dataset.price * quantity)}.00 </strong> <img id="delete-icon" src="./images/icon-delete.svg" style="cursor:pointer;"> </span> </p>
        <button class="btn rounded p-2 text-white w-100" style="background-color:#FF7E1B">Checkout</button>
        `
        document.getElementById("delete-icon").addEventListener("click", function() {
            modalBody.innerHTML = "Your cart is empty.";
            badge.textContent = "";
        })
    }
})

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.style.color = "#69707D";
    link.addEventListener("mouseover", function(e) {
        e.target.style.width = "fit-content";
        e.target.style.borderBottom = "1px solid #FF7E1B";
    });
    link.addEventListener("mouseout", function(e) {
        e.target.style.borderBottom = "none";
    });
});
