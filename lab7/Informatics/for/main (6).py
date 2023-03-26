a = int(input())
b = 0
for i in range(len(str(a))):
    b *= 10
    b += (a % 10)
    a //= 10
print(b)