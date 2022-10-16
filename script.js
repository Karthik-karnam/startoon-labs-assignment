const progress= document.querySelector(".progress-done");
const input = document.querySelector(".input");
const maxInput= document.querySelector(".maxInput");
let finalValue = 0;
let max = 0;

function changeWidth(){
    if(finalValue==null){
        progress.style.width=0;
        alert("Please enter a value");
    }
    if(finalValue<=max){
        progress.style.width=`${(finalValue/max)*100}%`;
    } 
    else if(finalValue>max){
        progress.style.width=0;
        alert("Please enter value less than max value");
    }
    else{
        progress.style.width=0;
        alert('Enter a value');
    }
}
input.addEventListener("keyup",function(){
    finalValue = parseInt(input.value, 10);
    changeWidth();
});
input.addEventListener("keyup",function(){
    max = parseInt(maxInput.value, 10);
    changeWidth();
});