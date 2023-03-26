def max_end3(nums):
   max_value = max(nums)
   nums[:] = [max_value if x != max_value else x for x in nums]
   return nums


print(max_end3([1, 2, 3]))