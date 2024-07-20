name= "Amolya Sharma"
new = {}
for i in name:
    if i.isalpha():
        i=i.upper()
        if i in new:
            new[i]+=1
        else:
            new[i]=1

print(new)