const purchasePrice = document.querySelector(".purchasePrice");
const stockQuantity = document.querySelector(".stockQuantity");
const currentPrice = document.querySelector(".currentPrice");
const checkPL = document.querySelector(".checkPL");
const output = document.querySelector(".output");
const img = document.querySelector("img");

checkPL.addEventListener('click', ()=>{
    var purchaseAmt = purchasePrice.value;
    var sQty = stockQuantity.value;
    var currentAmt = currentPrice.value;

    console.log(purchaseAmt,sQty,currentAmt)

    if(purchaseAmt>0 && sQty>0 && currentAmt>0){
    if(currentAmt>=purchaseAmt){
        img.src = "profit.jpg"
        const profit = ((currentAmt-purchaseAmt)*sQty).toFixed(2) 
        const profitPer = (((currentAmt-purchaseAmt)*100)/purchaseAmt).toFixed(2);
        output.style.color = "blue"
        output.innerText = `Whoo! You gained ${profitPer}%. Your total profit is ₹${profit}`
    }
}
    else{
        img.src = "loss.jpg"
        const loss = ((purchaseAmt-currentAmt)*sQty).toFixed(2) 
        const lossPer = (((purchaseAmt-currentAmt)*100)/purchaseAmt).toFixed(2);
        output.style.color = "red"
        output.innerText = `Oops! You lost ${lossPer}%. Your total loss is ₹${loss}`
    }
})