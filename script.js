

const container = document.querySelector(".container");
const resizeBtn = document.querySelector(".reset-grid");
const rgbDraw = document.querySelector(".rgb-draw");

function makeGrid(size) {

    if(size == isNaN || size < 0){

        size = 16;
    }

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);

    for (let x = 0; x < size * size; x++) {

        let grids = document.createElement('div');
        grids.classList.add('grids');
        container.appendChild(grids);
    }

}

function draw() {

    const grids = document.querySelectorAll('.grids');

    grids.forEach(div => {
        div.addEventListener("mouseover", (e) => {
            div.classList.add('changeColor');

        })
    })
}

function resizeGrid() {

    let size = prompt("Select your desired grid size");
    clearGrid();
    makeGrid(size);
    draw();

}

function clearGrid() {

    const divs = document.querySelectorAll(".grids");

    divs.forEach(div => {
        container.removeChild(div);
    });
}


function resizeGridRGB(){
   
    let size = prompt("Select your desired grid size");
    clearGrid();
    makeGrid(size);
   
    drawRGB();

}
function drawRGB() {


    const grids = document.querySelectorAll('.grids');

    grids.forEach(div => {
        div.addEventListener("mouseover", (e) => {
            
            let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = color;

        });
    });
    
}





let size = prompt("Enter your desired grid size");
makeGrid(size);
draw();
resizeBtn.addEventListener("click", resizeGrid);
rgbDraw.addEventListener("click", resizeGridRGB);