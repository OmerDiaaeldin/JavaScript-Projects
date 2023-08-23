let inputs = document.querySelectorAll(".controls input")

function handleInput(){
    let suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(`${this.name}`)
}

inputs.forEach(input => input.addEventListener('change', handleInput));
inputs.forEach(input => input.addEventListener('mousemove', handleInput));