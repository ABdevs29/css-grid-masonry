let item= document.querySelectorAll(".item");
let previousSelected= "";

function handleClick (el) {
    console.log(el.id);
    if (previousSelected != "") {

    }
    let item = document.getElementById("container");
    if (previousSelected != "") {
        item.classList.toggle(`expand-${previousSelected}`);
    }
    item.classList.remove("initial");
    item.classList.toggle(`expand-${el.id}`);
    console.log(item.classList);
    previousSelected = el.id;
}