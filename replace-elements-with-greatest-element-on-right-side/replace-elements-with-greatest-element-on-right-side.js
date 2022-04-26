/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = 0
    let temp = []
    let arrLen = arr.length;
    if(arr[1] === undefined){
            temp.push(-1)
            return temp
        }
    for(let i=1; i<arr.length; i++){
        if(arr[arr.length - i] > max || arr[arr.length - i] === max) {
            max = arr[arr.length - i]
            temp.push(arr[arr.length - i])
        }
        else {
            temp.push(max)
        }
        if(arr[i + 1] === undefined) {
            temp.unshift(-1)
        }
    }
    return temp.reverse()
};