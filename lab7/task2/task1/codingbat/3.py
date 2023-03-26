# Enter your code here. Read input from STDIN. Print output to STDOUT
x,y = map(int, input().split())
arr = []
cnt = 0
for i in range(x):
    arr.append( int(input()))

for a in range(2):
    for i in range(y):
        s = int(input())
        if arr.count(s):
            if a == 0:
                cnt+=1
            elif a == 1:
                cnt -=1  
print(cnt)
         
    
    

    
