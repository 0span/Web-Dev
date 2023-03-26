s = input()

cnt1 = 0
sum = (len(s)*(len(s)+1))/2
for i in range(0,len(s)):
   if s[i] == 'A' or s[i] == 'E' or s[i] == 'I' or s[i] == 'O' or s[i] == 'U':
       cnt1+= len(s)-i

cnt2 = int(sum - cnt1)

if cnt1> cnt2:
    print("Kevin {a}".format(a = cnt1))
elif cnt1 < cnt2:
    print("Stuart {a}".format(a = cnt2))
else:
    print("Draw")