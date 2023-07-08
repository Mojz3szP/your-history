console.log("siemanko!");


let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let table = document.querySelector(".js-table");
let tableHead = document.querySelector(".js-table_head");
let allstyle = document.querySelector(".js-allstyle");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    table.classList.toggle("table--dark");

    if (body.classList.contains("body--dark")) {
        allstyle.innerText = "jasny";
    }else{
        allstyle.innerText = "ciemny";
    }
});

