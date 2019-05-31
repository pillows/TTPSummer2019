var current_rows = 0;
var current_cols = 0;
var number_of_squares = 16;
var table = document.getElementById("table");


document.getElementById("add-row").addEventListener("click", function(){
    let row = table.insertRow(current_rows)
    for(let i = 0; i < number_of_squares; i++){
        let cell = row.insertCell(i)
    }
    current_rows++;
})

document.getElementById("sub-row").addEventListener("click", function(){
    table.deleteRow(current_rows-1);
    if(current_rows > 0)
        current_rows--;
})

document.getElementById("add-col").addEventListener("click", function(){
    console.log(table.rows)
    // current_cols++;
})

document.getElementById("sub-col").addEventListener("click", function(){
    if(current_rows > 0)
        current_cols--;
})

document.getElementById("find_all").addEventListener("click", function(){

})

document.getElementById("fill_empty").addEventListener("click", function(){

})

document.getElementById("clear").addEventListener("click", function(){

})
