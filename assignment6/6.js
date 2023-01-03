function swap(a,b){
    var temp=b;
    b=a;
    a=temp;
    return [a,b]
}
[x,y]=swap(5,6)
swap(5,6)
console.log(x);
console.log(y);