a = int(input())
arr = input().split()
n = 0
for i in range(a):
    if int(arr[i]) > 0:
        n += 1
print(n)