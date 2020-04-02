function update(){
    const suffix = this.dataset.sizing || "";
    console.log(this.id);
    document.documentElement.style.setProperty('--'+this.id,this.value+suffix);
}

console.log(1);
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);
inputs.forEach(input => input.addEventListener('change',update));
inputs.forEach(input => input.addEventListener('mousemove',update));