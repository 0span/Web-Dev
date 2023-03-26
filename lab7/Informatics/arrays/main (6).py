a = int(input())
arr = input().split()
n = 0
for i in range(1, a - 1):
    if int(arr[i]) > int(arr[i - 1]) and int(arr[i]) > int(arr[i + 1]):
        n += 1
print(n)