async function bubbleSort(barsArray) {
    let n = barsArray.length;
    for (let i = n-1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            barsArray[j].style.backgroundColor = "yellow";
            barsArray[j+1].style.backgroundColor = "yellow";
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (parseInt(barsArray[j].style.height) > parseInt(barsArray[j+1].style.height)) {
                await swap(barsArray[j], barsArray[j+1]);
            }
            barsArray[j].style.backgroundColor = "white";
            barsArray[j+1].style.backgroundColor = "white";
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        barsArray[i].style.backgroundColor = "green";
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}