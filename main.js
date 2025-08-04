const form = document.getElementById("form");
const formTwo = document.getElementById("formTwo");
const formThree = document.getElementById("formThree");
const formFour = document.getElementById("formFour");
const errMsg = document.getElementById("errMsg");
form.style.display = "block";
formTwo.style.display = "none";
formThree.style.display = "none";
formFour.style.display = "none";
errMsg.style.display = "none"

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const age = document.getElementById("age").value;
    if (age < 100) {
        console.log("1st question done");
        console.log(`Age = ${age}`);
        form.style.opacity = "0.3";
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
            formTwo.style.opacity = "0.3";
            errMsg.style.display = "block";
        } else {
            formTwo.style.opacity = "0.3";
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
    console.log("3rd question done");
    console.log(`Age = ${age}`);
    formThree.style.opacity = "0.3";
    formFour.style.display = "block";
});

formFour.addEventListener("submit", (e)=> {
    e.preventDefault();
    const time = document.getElementById("time2").value;
    console.log("4th question done");
    console.log(`Age = ${age}`);
    formFour.style.opacity = "0.3";
    errMsg.style.display = "block";
    }
});

// insert ai here
