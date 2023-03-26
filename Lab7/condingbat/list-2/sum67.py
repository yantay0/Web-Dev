def sum67(nums):
    if len(nums) == 0:
        return 0
    ok = True
    sum = 0
    for i in nums:
        if i == 6:
            ok = False
        elif ok == False and i == 7:
            ok = True
        elif ok:
            sum += i
    return sum