# Enter your code here. Read input from STDIN. Print output to STDOUT
import math
a = int(input())
b = int(input())
c = pow(pow(a,2)+pow(b,2),0.5)

x = (b/2)/pow((pow(b,2)+pow(c/2,2)-(b*a)),0.5)
print(90-int(math.asin(x)*180/3.14),end=chr(176))