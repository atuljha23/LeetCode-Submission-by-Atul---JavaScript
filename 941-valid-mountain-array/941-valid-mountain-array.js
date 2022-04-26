/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
   let arrLength = arr.length;
   let index = 0;

   while(index+1 < arrLength && arr[index] < arr[index+1]){
       index += 1;
   }

   if(index == 0 || index == arrLength-1) return false;

   while(index+1 < arrLength && arr[index] > arr[index+1]){
       index += 1;
   }

   return index == arrLength-1;

};