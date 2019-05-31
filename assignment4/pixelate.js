var current_rows = 0;
var current_cols = 16;
var number_of_squares = 16;

var table = document.getElementById("table");


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
        rows[i].insertCell(0)
    }

    // console.log(table.rows)

})

document.getElementById("sub-col").addEventListener("click", function(){
    let rows = table.rows;
    if(current_rows > 0)
        current_cols--;
    for(let i = 0; i < rows.length; i++){
        rows[i].deleteCell(0)
    }

})

document.getElementById("fill_all").addEventListener("click", function(){
    let select = document.getElementsByTagName("select")[0];
    let color = select.options[select.selectedIndex].value;

    let cells = table.getElementsByTagName("td");

    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = color;
    }


    // for(let i = 0; i < current_rows; i++){
    //     for(let j = 0; j < current_cols; j++){
    //         let col_color = table.rows[i].
    //         rows[i].
    //     }
    // }

})

document.getElementById("fill_empty").addEventListener("click", function(){
    let select = document.getElementsByTagName("select")[0];
    let color = select.options[select.selectedIndex].value;

    let cells = table.getElementsByTagName("td");

    for(let i = 0; i < cells.length; i++){
        // let cell_color =
        cells[i].style.backgroundColor = color;
    }
})

document.getElementById("clear").addEventListener("click", function(){
    let cells = table.getElementsByTagName("td");

    for(let i = 0; i < cells.length; i++){

        cells[i].style.backgroundColor = "gray";
    }
})
