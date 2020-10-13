/* 
Given an array of integer , return indices of the two numbers,such that they add upto a specific target,
you may assue each input would have exactly one solution and you may not use the same element twisw

nums = [2,7,11,15],target = 9
because nums[0] + nums [1] = 2+7 =9
return [0,1]
*/

//nums= [2,7,11,15], target 9
//returns an array with 2 elements [index1, index2]
//cc:[],[]
//cc:[1,1] =>[]
//[2,7,2,7]=[0,1]

//better way to do this is using JS object,it has unique key,
/* i will take a number i will substract the number with target number and i will save the compliment of that  number (9-2 =7) and lets save the idex, yhen when u encounter the number first check whether this number is already exist inside if it exist u already found the compliment, because u already know the index of the number

{
7:0
}*/

function twoSum(nums,target){
const comp = new Map();
const len = nums.length;

for(let i=0;i<len;i++){
if(comp[nums[i]] >=0){
 return [comp[nums[i]],i]
}
 comp[target-nums[i]] = i;
}
 return [];
    
}

const nums= [2,7,11,15];
console.log(twoSum(nums, 9))
