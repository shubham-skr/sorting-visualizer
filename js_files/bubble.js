async function bubbleSort(barsArray) {
    // n -> total number of bars 
    let n = barsArray.length;

    for (let i = n-1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {

            // change color of the bar being process to blue  
            barsArray[j].style.background = "#0072ff";
            barsArray[j+1].style.background = "#0072ff";
            await new Promise(resolve => setTimeout(resolve, delay));

            if (parseInt(barsArray[j].style.height) > parseInt(barsArray[j+1].style.height)) {
                await swap(barsArray[j], barsArray[j+1]);
            }

            // change color back to normal
            barsArray[j].style.background = "#ffd000";
            barsArray[j+1].style.background = "#ffd000";
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        // ith bar is sorted, change its color to green
        barsArray[i].style.background = "#15fa00";
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}
