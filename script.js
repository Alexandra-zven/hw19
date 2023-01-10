const btn_show = document.getElementById("btn_show");
const width = document.getElementById("input_width");
const height = document.getElementById("input_height");
const color = document.getElementById("input_color");
let count = document.getElementById("input_count");
const radius = document.getElementById("input_radius");
const playground = document.getElementById("playground");

btn_show.onclick = (() => {
    while(count.value != 0){
        console.log(count.value);
    const image = document.createElement("div");
    image.style.width = `${width.value}px`;
    image.style.height = `${height.value}px`;
    image.style.borderRadius = `${radius.value}px`;
    image.style.background = color.value;
    image.setAttribute('className', 'result');
    playground.appendChild(image);
    count.value--;}
});