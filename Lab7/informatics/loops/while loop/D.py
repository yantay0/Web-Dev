num = int(input())
while num % 2 == 0:
    num /= 2

print("YES" if num == 1 else "NO")