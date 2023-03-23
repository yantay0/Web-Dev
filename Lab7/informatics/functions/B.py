def power(a, n):
    ans = 1
    for _ in range(n):
        ans *= a
    return ans

a, n = map(int, input().split())
print(power(a, n))