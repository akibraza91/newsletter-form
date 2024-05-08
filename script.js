const emailInput = document.getElementById("emailInput");
const errorPara = document.querySelector(".validation p");
const myForm = document.getElementById("myForm");
const myMain = document.querySelector("main");
const mySection = document.querySelector("section");

const validEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = emailInput.value;
    const isValid = validEmail(inputValue);

    if(isValid){
        errorPara.style.display = "none";
        emailInput.style.backgroundColor = "";
        emailInput.style.borderColor = "";
        window.location.href = "form.html";
    }else{
        errorPara.style.display = "block";
        emailInput.style.backgroundColor = "rgba(255, 98, 87, 0.2)";
        emailInput.style.borderColor = "rgba(255, 98, 87, 0.4)";
    }
});