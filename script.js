const submitBtn = document.querySelector('.submitbtn');
const rantingBlock = document.querySelectorAll('.btngroup button');
const thankState = document.querySelector('.thankState');
thankState.style.display = "none";
const ratingState = document.querySelector('.ratingState');
const temp = document.querySelector(".selectScript span");
let ratingPoint = "";
for (let btn of rantingBlock) {
    btn.addEventListener('click', function () {
        ratingPoint = this.value;
    });
}
submitBtn.addEventListener('click', function () {
    if (ratingPoint !== "") {
        temp.innerText = ratingPoint;
        thankState.style.display = "flex";
        ratingState.style.display = "none";
    }
    else {
        alert("You missed the point!!");
    }
}
);
