const durationInput = document.querySelector("#duration");
const pauseButton = document.querySelector("#pause");
const startButton = document.querySelector("#start");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("timer started");
  },
  onTick() {
    const steps = perimeter / durationInput.value;
    circle.setAttribute("stroke-dashoffset", currentOffset);
    currentOffset = currentOffset - 1;
    console.log("timer just ticked down");
  },
  onComplete() {
    console.log("timer complete");
  }
});

timer.start();
