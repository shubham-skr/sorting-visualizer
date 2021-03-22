async function selectionSort(barsArray) {
    // n is the total number of bars
    let n = barsArray.length;
    // stores index of bar with minimum height during the process
    let minIndex = 0;

    for (let i = 0; i < n-1; i++) {
        minIndex = i;

        // change current bar's color to blue
        barsArray[minIndex].style.background = "#0072ff";
        await new Promise(resolve => setTimeout(resolve, delay));

        for (let j = i+1; j < n; j++) {
            // change the color of the bar to be compared to blue
            barsArray[j].style.background = "#0072ff";
            await new Promise(resolve => setTimeout(resolve, delay));

            if (parseInt(barsArray[j].style.height) < parseInt(barsArray[minIndex].style.height)) {
                // change color of old bar with minimum height back to normal
                barsArray[minIndex].style.background = "#ffd000";
                minIndex = j;
                // change color of new bar with minimum height to blue
                barsArray[minIndex].style.background = "#0072ff";
                await new Promise(resolve => setTimeout(resolve, delay));
            }
            // prevent changing of color of minimum height bar to normal
            if (minIndex != j) {
                barsArray[j].style.background = "#ffd000";
                await new Promise(resolve => setTimeout(resolve, delay));
            } 
        }

        if (minIndex != i)
            await swap(barsArray[minIndex], barsArray[i]);

        // ith bar is sorted, change color to green
        barsArray[minIndex].style.background = "#ffd000";
        barsArray[i].style.background = "#15fa00";
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    barsArray[n-1].style.background = "#15fa00";
}
