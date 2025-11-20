let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(count + "still counting");

  if (count === 10) {
    clearInterval(intervalId);
    console.log("Stopped at 10");
  }
}, 1000);
