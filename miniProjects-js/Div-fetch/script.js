const inputDiv = document.getElementById("inputDiv");
const outputDiv = document.getElementById("outputDiv");

inputDiv.addEventListener("input", () => {
    outputDiv.innerText = inputDiv.innerText;
});
