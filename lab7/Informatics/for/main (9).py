a = int(input())
n = 0
for i in range(1, int(a**0.5) + 1):
    if a % i == 0:
        n += 2
    if i*i == a:
        n -= 1
    if a == 1:
        n = 1
print(n)