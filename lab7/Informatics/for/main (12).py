a = input()
n = 0
b = str(a)[::-1]
for i in range(len(b)):
    n += int(b[i]) * (2**i)
print(n)