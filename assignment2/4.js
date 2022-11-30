function removeACharacter(arr,c){
    var indexOfC=arr.indexOf(c)
    return arr.splice(indexOfC,1)
}