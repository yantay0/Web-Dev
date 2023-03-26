def string_match(a, b):
    short_len = min(len(a), len(b))
    count = 0

    for i in range(short_len - 1):
        a_sub = a[i:i+2]
        b_sub = b[i:i+2]
        print(a_sub)
        if a_sub == b_sub:
            count += 1
    return count

string_match('xxcaazz', 'xxbaaz')