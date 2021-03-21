async function swap(ele1, ele2) {
    ele1.style.backgroundColor = "red";
    ele2.style.backgroundColor = "red";
    await new Promise(resolve => setTimeout(resolve, 1000));
    let heightEle1 = ele1.style.height;
    let heightEle2 = ele2.style.height;
    ele1.style.height = heightEle2;
    ele2.style.height = heightEle1;
    await new Promise(resolve => setTimeout(resolve, 1000));
}