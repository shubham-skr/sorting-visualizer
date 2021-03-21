async function insertionSort(barsArray) {
    let n = barsArray.length;
    for (let i = 1; i < n; i++) {
       let j = i-1;
       let key = parseInt(barsArray[i].style.height);
       barsArray[j+1].style.background = "yellow";
       barsArray[j].style.background = "yellow";
       await new Promise(resolve => setTimeout(resolve, 1000));
        while (j >= 0 && parseInt(barsArray[j].style.height) > key) {
            await swap(barsArray[j+1], barsArray[j]);
            barsArray[j+1].style.background = "white";
            barsArray[j].style.background = "yellow";
            await new Promise(resolve => setTimeout(resolve, 1000));
            j--;
            if (j >= 0) {
                barsArray[j].style.background = "yellow";
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        if (j >= 0)
            barsArray[j].style.background = "white";
        barsArray[j+1].style.background = "white";
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    for (let i = 0; i < n; i++) {
        barsArray[i].style.background = "green";
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
}