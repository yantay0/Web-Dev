if __name__ == '__main__':
    min = 100
    snd_min = 100
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
        if(score < min):
            min = score

    for st in students:
        if(st[1] > min and st[1] < snd_min):
            snd_min = st[1]
    
    for st in sorted(students):
        if(snd_min == st[1]):
            print(st[0])
    