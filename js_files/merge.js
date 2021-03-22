async function merge(barsArray, leftIndex, midIndex, rightIndex) {
    // shows mergesort has been called in which part of barsArray by changing its color to blue
    for (let i = leftIndex; i <= rightIndex; i++) {
        barsArray[i].style.background = "#0072ff";
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    
    let leftArrSize = midIndex - leftIndex + 1;
    let rightArrSize = rightIndex - midIndex;
    
    let leftArray = [];
    let rightArray = [];
    
    for (let i = 0; i < leftArrSize; i++) {
        leftArray[i] = barsArray[leftIndex + i].style.height;
    }
    
    for (let j = 0; j < rightArrSize; j++) {
        rightArray[j] = barsArray[midIndex + 1 + j].style.height;
    }
    
    let leftCurrIndex = 0;
    let rightCurrIndex = 0;
    let barCurrIndex = leftIndex;
    
    while (leftCurrIndex < leftArrSize && rightCurrIndex < rightArrSize) {
        if (parseInt(leftArray[leftCurrIndex]) <= parseInt(rightArray[rightCurrIndex])) {
            barsArray[barCurrIndex].style.height = leftArray[leftCurrIndex];
            leftCurrIndex++;
        } else {
            barsArray[barCurrIndex].style.height = rightArray[rightCurrIndex];
            rightCurrIndex++;
        }
        barCurrIndex++;
    }
    
    while (leftCurrIndex < leftArrSize) {
        barsArray[barCurrIndex].style.height = leftArray[leftCurrIndex];
        leftCurrIndex++;
        barCurrIndex++;
    }
    
    while (rightCurrIndex < rightArrSize) {
        barsArray[barCurrIndex].style.height = rightArray[rightCurrIndex];
        rightCurrIndex++;
        barCurrIndex++;
    }
    
    await new Promise(resolve => setTimeout(resolve, delay));
}

async function mergeSort(barsArray, leftIndex, rightIndex) {
    if (leftIndex >= rightIndex) {
        return;
    } 
    // shows in which part of barsArray merge function is called by changing color to pink
    for (let i = leftIndex; i <= rightIndex; i++) {
        barsArray[i].style.background = "#ff0077";
    }

    if ((rightIndex - leftIndex) == barsArray.length-1)
    await new Promise(resolve => setTimeout(resolve, delay));


    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    
    // change left part color to normal
    for (let i = midIndex+1; i <= rightIndex; i++) {
        barsArray[i].style.background = "#ffd000";
    }
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // sort left part
    await mergeSort(barsArray, leftIndex, midIndex);
    
    // change left part color to pink
    for (let i = midIndex+1; i <= rightIndex; i++) {
        barsArray[i].style.background = "#ff0077";
    }
    // change right part color to normal
    for (let i = leftIndex; i <= midIndex; i++) {
        barsArray[i].style.background = "#ffd000";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    // sort right part of array
    await mergeSort(barsArray, midIndex+1, rightIndex);
    
    // change current part color to pink
    for (let i = leftIndex; i <= rightIndex; i++) {
        barsArray[i].style.background = "#ff0077";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    // merge two sorted parts
    await merge(barsArray, leftIndex, midIndex, rightIndex);
    
    // if current part is the whole array and has been sorted, then change its color to green
    if ((rightIndex - leftIndex) == barsArray.length-1) {
        for (let i = leftIndex; i <= rightIndex; i++) {
            barsArray[i].style.background = "#15fa00";
        }
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}
