async function insertionSort(barsArray) {
    // n is the total number of bars
    let n = barsArray.length;
    
    for (let i = 1; i < n; i++) {

       let j = i-1;
       let key = parseInt(barsArray[i].style.height);

       // change the color of the bar to be compared to blue
       barsArray[j+1].style.background = "#0072ff";
       barsArray[j].style.background = "#0072ff";
       await new Promise(resolve => setTimeout(resolve, delay));

        while (j >= 0 && parseInt(barsArray[j].style.height) > key) {

            await swap(barsArray[j+1], barsArray[j]);

            // change color back to normal
            barsArray[j+1].style.background = "#ffd000";
            barsArray[j].style.background = "#0072ff";
            await new Promise(resolve => setTimeout(resolve, delay));

            j--;
        
            // change the color of the first bar smaller or equal to the key's bar
            if (j >= 0) {
                barsArray[j].style.background = "#0072ff";
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
        // change color back to normal 
        if (j >= 0)
            barsArray[j].style.background = "#ffd000";
        barsArray[j+1].style.background = "#ffd000";
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    // barsArray is sorted, change bar's color to green
    for (let i = 0; i < n; i++) {
        barsArray[i].style.background = "#15fa00";
    }
    await new Promise(resolve => setTimeout(resolve, delay));
}
