x = input()
ans = ""
for ch in reversed(x):
    if(ch != '0'):
       ans+=ch

print(ans)