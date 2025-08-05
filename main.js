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
});

const workouts = [
  "6 x 30s hill sprints, jog down recovery",
  "8 x 45s hill sprints, jog down recovery",
  "12 x 60s hill sprints, jog down recovery",
  "6 x 1 min fast / 1 min walk",
  "5 x 2 min fast / 1 min jog",
  "6 x 3 min @ 5K pace / 90s jog",
  "Pyramid: 1-2-3-2-1 min hard, equal jog recovery",
  "4 x 400m @ 5K pace, 200m jog",
  "6 x 400m @ 5K pace, 200m jog",
  "8 x 400m @ 3K pace, 200m jog",
  "Fartlek: 1-2-3-2-1 min hard, 1 min jog",
  "Fartlek: random pace shifts on timer beeps",
  "2 x 5 min tempo with 2 min jog",
  "3 x 6 min tempo with 90s jog",
  "4 x 7 min tempo with 90s jog",
  "Progression run: 20 min, last 5 min hard",
  "3 x 6 min threshold pace, 1 min rest",
  "3–5 loops of 800m terrain: uphill push, downhill control, steady loop",
  "3K steady + 1 min sprint finish",
  "Short tempo: 10 min easy + 5 min hard"
];
