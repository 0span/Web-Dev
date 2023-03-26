n = int(input())
words = []
for i in range(n):
    words.append(input())

counts = {}
for word in words:
    if word not in counts:
        counts[word] = 1
    else:
        counts[word] += 1

result = []
for word in words:
    if word in counts:
        result.append(str(counts[word]))
        del counts[word]

print(len(result))
print(' '.join(result))