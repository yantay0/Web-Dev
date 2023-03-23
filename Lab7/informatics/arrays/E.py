n = int(input())
arr = list(map(int, input().split()))
ans = False 

for i in range(0, len(arr) - 1):
    if(arr[i + 1] > 0 and arr[i] > 0) or (arr[i + 1] < 0 and arr[i] < 0):
        ans = True
        break
print("YES" if ans else "NO")