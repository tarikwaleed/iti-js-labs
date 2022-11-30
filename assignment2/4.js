function removeACharacter(arr,c){
    var indexOfC=arr.indexOf(c)
    arr.splice(indexOfC,1)
    return arr
}