def swap_case(s):
    s = list(s)
    for i in range(len(s)):
        upper_lower_diff = ord('a') - ord('A')
        if (s[i] >= 'a' and s[i] <= 'z'):
            s[i] = chr(ord(s[i]) - upper_lower_diff)
        elif (s[i] >= 'A' and s[i] <= 'Z'):
            s[i] = chr(ord(s[i]) + upper_lower_diff)
    return "".join(s)

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)