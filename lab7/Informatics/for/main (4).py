a = input()
b = int(input())
n = 0
for i in range(len(a)):
    if int(a) % 10 == b:
        n = n + 1
    a = int(a)/10
print(n)