let welcome = () => {
  console.log("Hello");
}




const init = () => {
    const button = document.querySelector(".js-button");
    const body = document.querySelector(".js-body");
    const table = document.querySelector(".js-table");
    const allstyle = document.querySelector(".js-allstyle");    
button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    table.classList.toggle("table--dark");

    if (body.classList.contains("body--dark")) {
        allstyle.innerText = "jasny";
    }else{
        allstyle.innerText = "ciemny";
    }
});
};
init();
