a = int(input())
n = 0
for i in range(len(str(a))):
    n += a % 10
    a //= 10
print(n)