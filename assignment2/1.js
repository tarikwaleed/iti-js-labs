function tipOfTheDay() {
    tips = ["Javascript is aweseme", "Javascript is interpeted language",
     "tip3", "tip4", "tip5", "tip6", "tip7", "tip8", "tip9", "tip10"]
    var r = Math.floor(Math.random() * 10)
    console.log(r)
    return tips[r]


}