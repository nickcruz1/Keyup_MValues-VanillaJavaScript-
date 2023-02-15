function reset() {
  let output = document.querySelector(".output");
  let otherOutput = document.querySelector(".otherOutput");

  otherOutput.innerHTML = "The values have been reset!";
  setTimeout((myReset) => {
    output.innerHTML = "";
    otherOutput.innerHTML = "";
  }, 2000);
}