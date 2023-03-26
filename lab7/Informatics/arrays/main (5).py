a = int(input())
arr = input().split()
b = False
for i in range(1, a):
    if int(arr[i]) * int(arr[i - 1]) > 0:
        b = True
        break
if b:
    print("YES")
else:
    print("NO")