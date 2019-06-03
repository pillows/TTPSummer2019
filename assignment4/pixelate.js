var current_rows = 0;
var current_cols = 16;
var number_of_squares = 16;
var hovering = false;
var table = document.getElementById("table");
var holding = false;
const default_color = "gray";

let selected_color = () => {
    let select = document.getElementsByTagName("select")[0];
    let color = select.options[select.selectedIndex].value;
    return color
}
document.addEventListener("DOMContentLoaded", function(event) {

});

//  Testing functions for clicking and hovering
let tableDown = (e) => {

    // if the user holds the mouse down then holding will be set to true
    holding = true;
    console.log(e)
}

let tableUp = (e) => {

    // when the user releases the mouse then holding is set to false
    holding = false;
    console.log("off")
}

// tableOver will highlight the hovered cells and make them the selected color
let tableOver = (e) => {

    let color = selected_color();
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        console.log(holding)
        if(holding === true){

            cells[i].onmouseover = function() {
                console.log(i);
                this.style.backgroundColor = color;
            };

            cells[i].onmouseup = function() {
                holding = false;
            };
        }
    }
}

table.onmousedown = tableDown;
table.onmouseup = tableUp;
table.onmouseover = tableOver;


document.getElementById("add-row").addEventListener("click", function(){
    let default_color = "gray";
    let rows = table.rows;
    let row = table.insertRow(current_rows)
    for(let i = 0; i < current_cols; i++){
        let cell = row.insertCell(i)

    }

    for(let j = 0; j < rows[current_rows].cells.length; j++){
        rows[current_rows].cells[j].style.backgroundColor = default_color;
    }


    current_rows++;
})

document.getElementById("sub-row").addEventListener("click", function(){
    table.deleteRow(current_rows-1);
    if(current_rows > 0)
        current_rows--;
})

document.getElementById("add-col").addEventListener("click", function(){
    let rows = table.rows;
    current_cols++;
    for(let i = 0; i < rows.length; i++){
        
        // for(let j = 0; rows[i].cells.length; j++){
        //     rows[i].cells[j].style.backgroundColor = default_color;
        // }
        rows[i].insertCell(0)
    }

    // console.log(table.rows)

})

document.getElementById("sub-col").addEventListener("click", function(){
    let rows = table.rows;
    // We need to decrement our variable to keep track of how many columns
    // there still are, this is to make sure we have a correct number of
    // columns where there are rows
    if(current_rows > 0)
        current_cols--;
    for(let i = 0; i < rows.length; i++){
        // Deleting the first cell vs last cell makes no difference
        // But deleting the first one is easier on the eyes and logic
        rows[i].deleteCell(0)
    }

})

document.getElementById("fill_all").addEventListener("click", function(){
    let color = selected_color();

    let cells = table.getElementsByTagName("td");

    // All the cells will be looped through and have their inline css
    // backgroundColor to be the selected color
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = color;
    }


})

document.getElementById("fill_empty").addEventListener("click", function(){
    let color = selected_color();

    let cells = table.getElementsByTagName("td");

    // The cells that are the color of the default color will be set
    // to the color that is currently selected
    for(let i = 0; i < cells.length; i++){
        if(cells[i].style.backgroundColor === default_color)
            cells[i].style.backgroundColor = color;
    }
})

document.getElementById("clear").addEventListener("click", function(){
    let cells = table.getElementsByTagName("td");

    for(let i = 0; i < cells.length; i++){
        // Resetting all the cells to the global default_color variable
        cells[i].style.backgroundColor = default_color;
    }
})
