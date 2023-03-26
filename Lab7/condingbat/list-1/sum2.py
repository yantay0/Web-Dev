def sum2(nums):
    if len(nums) == 1:
        return nums[0]
    elif len(nums) == 0:
      return 0
    return sum(nums[:2])
      
    