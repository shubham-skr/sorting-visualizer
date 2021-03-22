let array_size = document.querySelector(".array_size");
let animationSpeed = document.querySelector(".speed");

// create given number of bars
function createBars(size) {
    let array = [];
    let barContainer = document.querySelector(".bar-container");
    for(let i = 1; i <= size; i++) {
        let barHeight = Math.floor(Math.random()*maxBarHeight) + 5;
        array.push(barHeight);
        let bar = document.createElement("div");
        bar.classList.add("bars")
        bar.style.height = barHeight + "vh";
        barContainer.appendChild(bar);
    }
}

// removes all the bars from the bar container
function removeBars() {
    document.querySelectorAll(".bars").forEach((node) => {
        node.remove();
    });
}

// creates new bars array when "new array" button is clicked
let newArrayBtn = document.querySelector(".new-array");
newArrayBtn.addEventListener("click", () => {
    removeBars();
    createBars(array_size.value);
}); 

// change number of bars when changing the range / moving the slider of "array size"
array_size.addEventListener("input", () => {
    removeBars();
    createBars(array_size.value);
});

// changes the duration of transition and delay of setTimeout when changing the slider / range of "speed"
animationSpeed.addEventListener("input", () => {
    delay = 3000 - animationSpeed.value + 100;
    document.querySelectorAll(".bars").forEach((bar) => {
        bar.style.transitionDuration = ((delay/1000)*0.7) + "s";
    });  
});

// starts sorting using selection sort when "selection sort" button is clicked
let selectionSortBtn = document.querySelector(".selection-sort");
selectionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    selectionSort(barsArray);
});

// starts bubble sort when "bubble sort" button is clicked
let bubbleSortBtn = document.querySelector(".bubble-sort");
bubbleSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    bubbleSort(barsArray);
});

// starts insertion sort when "insertion sort" button is clicked
let insertionSortBtn = document.querySelector(".insertion-sort");
insertionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    insertionSort(barsArray);
});

// starts merge sort when "merge sort" button is clicked
let mergeSortBtn = document.querySelector(".merge-sort");
mergeSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    mergeSort(barsArray, 0, barsArray.length-1);
});

// creates bars when the page is loaded
createBars(array_size.value);

