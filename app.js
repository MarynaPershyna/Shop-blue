//add to cart

//let productsCountEL = document.getElementById("products-count"); 
let productsCountEL = document.querySelector("#products-count");

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

// console.log(productsCountEL);
// console.log(addToCartBtns);



// for(let i = 0;i < addToCartBtns.length;i++){
//   addToCartBtns[i].addEventListener("click", function(){
// console.log("clicked");
// });  
// }
//через for each

// addToCartBtns.forEach((btn) =>
// btn.addEventListener("click", function(){
//     console.log("clicked")
// })
// );

// addToCartBtns.forEach((btn) =>
// btn.addEventListener("click", function(){
//     let prevProductsCount = +productsCountEL.textContent;
//     console.log(prevProductsCount);
// })
// );

// addToCartBtns.forEach((btn) =>
// btn.addEventListener("click", function(){
//     let prevProductsCount = +productsCountEL.textContent;
//     productsCountEL.textContent = prevProductsCount + 1;
// })
// );
//короткий запис:

addToCartBtns.forEach((btn) =>
btn.addEventListener("click", function() {
    productsCountEL.textContent = +productsCountEL.textContent + 1;
})
);

//ДЗ - дома- лайк
let btnLike = document.querySelectorAll('.btn-like');
// const btnClicked = document.querySelector(".btn-like-clicked");
// console.log(btnLike)
// btnLike.addEventListener('click', function(){
//     btnLike.classList.toggle('btn-like-clicked');
    // console.log(btnLike)
// })


//
// 

btnLike.forEach((item) =>
    item.addEventListener("click", function () {
        // if (item.classList.contains("liked")) {
        //     item.classList.remove("liked");
        // } else {
        //     item.classList.add("liked");
        // }
        item.classList.toggle("liked")
    })
);

//modal window//////відкрити модал вікно. закрити модал вікно.

let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");

moreDetailsBtns.forEach((item) =>
item.addEventListener("click", function () {
    // console.log("clicked")
}))

moreDetailsBtns.forEach((item) =>
    item.addEventListener("click", openModal)
);



let moreDetailsBtnsClose = document.querySelector(".btn-close");
moreDetailsBtnsClose.addEventListener("click", closeModal
    );

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide")
    }
    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show")
    }
//зникае вікно коли клик на полі

    modal.addEventListener("click", function (e){
        if (e.target === modal) {
            closeModal();
            
        }
    })

    function showModalByScroll() {
        if (window.scrollY >= document.body.scrollHeight / 2){
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    };
            // setTimeout(openModal, 5000);
            
            // window.addEventListener("scroll", showModalByScroll);

    //slick
    
    $(".slider-block").slick({
        // autoplay:true,
        dots:true,
    });

    // AOS.init();

    const decrementBtns = document.querySelectorAll(".decrement-button");
    const incrementBtns = document.querySelectorAll(".increment-button");
    const productsInput = document.querySelectorAll(".product-quantity input");
    // console.log(decrementBtns);
    // console.log(incrementBtns);
    // console.log(productsInput);

    function Counter(incrementBtn, decrementBtn, inputField) {
        this.domRefs = {
            incrementBtn,
            decrementBtn,
            inputField,
        };
        this.toggleButtonState = function () {
            let count = this.domRefs.inputField.value;
            this.domRefs.decrementBtn.disabled = count <= 1;
            this.domRefs.incrementBtn.disabled = count >= 10;
        };
        this.toggleButtonState();
        

        this.increment = function () {
            this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
            this.toggleButtonState();
        };
        this.decrement = function () {
            this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
            this.toggleButtonState();
        };
        this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
        this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
    }
    // const counter1 = new Counter(incrementBtns, decrementBtns, productsInput);
    // console.log(counter1);

    //для всіх 
    const counters = [];

    productsInput.forEach((item,i) => {
        counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item);
    });

