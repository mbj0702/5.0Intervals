const clock = document.querySelector("h2#clock");
let counter = 0;

function getClock() {

    console.log(counter);

    if (counter >= 5) {
        clearInterval(interId);
    }

    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

    counter += 1;


}

getClock();

const interId = setInterval(getClock, 1000);

// setTimeout(getClock, 1000);
