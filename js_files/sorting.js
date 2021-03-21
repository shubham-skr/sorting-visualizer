let newArrayBtn = document.querySelector(".new-array");
newArrayBtn.addEventListener("click", () => {
    removeBars();
    createBars();
}); 

createBars();

function createBars() {
    let array = [];
    let barContainer = document.querySelector(".bar-container");
    for(let i = 1; i <= 5; i++) {
        let barHeight = Math.floor(Math.random()*76);
        array.push(barHeight);
        let bar = document.createElement("div");
        bar.classList.add("bars")
        bar.style.height = barHeight + "vh";
        barContainer.appendChild(bar);
    }
}

function removeBars() {
    document.querySelectorAll(".bars").forEach((node) => {
        node.remove();
    });
}

let bubbleSortBtn = document.querySelector(".bubble-sort");
bubbleSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    bubbleSort(barsArray);
});


let selectionSortBtn = document.querySelector(".selection-sort");
selectionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    selectionSort(barsArray);
});

let insertionSortBtn = document.querySelector(".insertion-sort");
insertionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    insertionSort(barsArray);
});


