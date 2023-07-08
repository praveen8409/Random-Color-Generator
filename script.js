const mainButton = document.querySelector('button');
// console.log(mainButton);
const body = document.body;
// console.log(body);
const currentColor = document.querySelector('.current-color');
// console.log(currentColor);

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256); // generate the random number for red color value in rgb();
    const green = Math.floor(Math.random() * 256);  // generate the random number for green color value in rgb();
    const blue = Math.floor(Math.random() * 256);    // generate the random number for blue color value in rgb();
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator();
    // console.log(randomColor);
    body.style.backgroundColor = randomColor; // Set backGroundColor of body
    currentColor.textContent = randomColor;   // set rgb() value in Current color
})