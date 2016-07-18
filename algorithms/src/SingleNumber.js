// Given an array of numbers nums, in which exactly two elements appear only once and 
// all the other elements appear exactly twice. Find the two elements that appear only once.

// For example:

// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

function singleNumber(nums){
  var dictionary = {}
  var results = []
  for(var i = 0; i < nums.length; i++){
      if(!dictionary[nums[i]]){
          dictionary[nums[i]] = 1
      } else {
          dictionary[nums[i]]++
      }
  }
  
  for(var key in dictionary){
     if(dictionary[key] === 1){
         results.push(Number(key))
     } 
  }

  return results
}