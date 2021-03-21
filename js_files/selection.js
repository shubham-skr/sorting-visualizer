async function selectionSort(barsArray) {
    let n = barsArray.length;
    let minIndex = 0;
    for (let i = 0; i < n-1; i++) {
        minIndex = i;
        barsArray[minIndex].style.background = "blue";
        await new Promise(resolve => setTimeout(resolve, 1000));
        for (let j = i+1; j < n; j++) {
            barsArray[j].style.background = "yellow";
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (parseInt(barsArray[j].style.height) < parseInt(barsArray[minIndex].style.height)) {
                barsArray[minIndex].style.background = "white";
                minIndex = j;
                barsArray[minIndex].style.background = "blue";
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            if (minIndex != j) {
                barsArray[j].style.background = "white";
                await new Promise(resolve => setTimeout(resolve, 1000));
            } 
        }
        if (minIndex != i)
            await swap(barsArray[minIndex], barsArray[i]);
        barsArray[minIndex].style.background = "white";
        barsArray[i].style.background = "green";
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}