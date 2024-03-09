const button = document.querySelector("button");
const output = document.querySelector(".output");
button.addEventListener("click", () => {
    const cost = document.querySelector("input");
    let tip = (cost.value * 0.15).toFixed(2);
    let outputText = `<b>you should tip £${tip} on £${cost.value}`;
    output.innerHTML = outputText;
}
);
