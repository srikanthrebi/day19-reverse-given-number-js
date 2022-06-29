let x,sum,reminder;
sum = 0;
function reverse(x){
    while(x > 0){
        reminder = x % 10;
        x = x - reminder;
        x = x / 10;
        sum = sum * 10 + reminder;
    }
    return sum;
}
var result = reverse(677);
console.log(+result)