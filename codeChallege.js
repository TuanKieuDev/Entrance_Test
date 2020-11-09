let y = Math.floor(Math.random() * 10) +1;
console.log(y);
let a = 0;
function Guess() {
    let x = document.getElementById('may_man');
    let m = x.value;
    if(m>10||m<0){
        alert("Sai quy định, nhập lại từ 1 đến 10");
    }
    else{
    if(m==y) {
        alert("Bạn đã dự đoán đúng, số may mắn lần này là: "+y);a=1;
    }
    else {
        alert("Sai rồi! Đừng bỏ cuộc");
    }
    } 
}

let k = 0;
function count() {
    Guess();
    k++;
    if(k==3&&a==0) alert("Chúc bạn may mắn lần sau, đã đoán tối đa 3 lần, số may mắn là: "+y);
}



function enterGuess(e) {
    if(e.key === 'Enter'){
        e.preventDefault();
        count();
    }
}