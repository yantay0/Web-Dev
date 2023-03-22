x = input()
dec = 0
for i in range(len(x)):
    dec += 2**(len(x) - i - 1) * (int(x[i]))

print(dec)
