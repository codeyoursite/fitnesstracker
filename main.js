const form = document.getElementById("form");
const formTwo = document.getElementById("formTwo");
const formThree = document.getElementById("formThree");
const formFour = document.getElementById("formFour");
form.style.display = "block";
formTwo.style.display = "none";
formThree.style.display = "none";
formFour.style.display = "none";

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const age = document.getElementById("age").value;
    if (age < 100) {
        console.log("1st question done");
        console.log(`Age = ${age}`);
        form.style.display = "none";
        formTwo.style.display = "block";
    } else {
        console.error("Please enter an age that is below 100.");
    }
});

formTwo.addEventListener("submit", (e)=> {
    e.preventDefault();
    const checked_radio = document.querySelector('input[name = "yesno"]:checked');
    if (checked_radio != null) {
        console.log("2nd question done");
        if (checked_radio.value === "I don't have one.") {
            console.log(checked_radio.value);
            formTwo.style.display = "none";
            formFour.style.display = "block";
        } else {
            formTwo.style.display = "none";
            formThree.style.display = "block";
            console.log("its working");
        }
    } else {
        alert('Nothing checked');
    }
});

formThree.addEventListener("submit", (e)=> {
    e.preventDefault();
    const time = document.getElementById("time").value;
    if (time.length = 4 && time.includes(".")) {
        console.log("1st question done");
        console.log(`Age = ${age}`);
        form.style.display = "none";
        formTwo.style.display = "block";
    } else {
        console.error("Please enter a valid time.");
    }
});