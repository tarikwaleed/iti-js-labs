function numberOccurences(arr, n) {
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n)
            count++

    }
    return count
}