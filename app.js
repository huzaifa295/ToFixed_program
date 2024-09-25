var deci=0.12345678
console.log(deci.toFixed(3))

// Logic to made fixed point after dot

var num=prompt("Enter a decimal number")
// 0.12345678
var desire_len=prompt("Enter a desire length")

var temp=num.indexOf(".")
var new_num=num.slice(temp+1,)
console.log(new_num[desire_len])

if(new_num[desire_len]>=5){
    num2=parseInt(new_num[desire_len - 1])+1
    sliced= new_num.slice(0,desire_len - 1) + num2
}else{
    sliced=new_num.slice(0,desire_len)
}

var first_num=num.slice(0,temp+1)

console.log(first_num+sliced)