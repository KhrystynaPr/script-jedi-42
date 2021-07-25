// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
              return [map.get(nums[i]), i];
        }
        if (!map.has(target - nums[i])) {
              map.set(target - nums[i], i);
        }
    }
};

  






   

        
           
        
       
         



