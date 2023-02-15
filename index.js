function reset() {
  let output = document.querySelector(".output");
  let otherOutput = document.querySelector(".otherOutput");

  otherOutput.innerHTML = "The values have been reset!";
  setTimeout((myReset) => {
    output.innerHTML = "";
    otherOutput.innerHTML = "";
  }, 2000);
}

function myReset() {
  let output = document.querySelector(".output");
  let otherOutput = document.querySelector(".otherOutput");
  output.innerHTML = "";
  otherOutput.innerHTML = "";
}

function keySubmit() {
  let input = document.querySelector(".theInput");
  let output = document.querySelector(".output");

  output.innerHTML = input.value.toUpperCase();
  input.value = "";
  
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
})
   
}

function addGroup() {
  let mGroupText = document.querySelector(".mGroupText");
  let mGroupPass = document.querySelector(".mGroupPass");
  let mGroupNum = document.querySelector(".mGroupNum");
  let mGroupOutput = document.getElementById("mGroupOutput");

  let mGroup = [mGroupText.value, mGroupPass.value, mGroupNum.value];

  mGroupOutput.innerHTML = `
    <div class="mvContainer">
    <h2 class="mvText"> Multiple Value Submissions</h2>
    <h5 class="blueText">The Text Value is:${mGroup[0]}</h5> \<br>\
    <h5 class="redText">The Password Value is:${mGroup[1]}</h5> \<br>\
    <h5 class="greenText">The Number Value is:${mGroup[2]}</h5>  
    </div>`;
}
