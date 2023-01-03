function getMax(...args)
{
    let maxNumber= args[0];
    for(let i=1;i<args.length;i++)
    {
        if(args[i]>maxNumber)
        {
            maxNumber=args[i];
        }
    }
    return maxNumber;
}
var max=getMax(1,2,3,4,5,6)
console.log(max);