import pandas as pd
import collections
import json
df= pd.read_csv("test_2_2.csv")
ft=df.head()
df2= pd.read_json('test_2_headder.json')
r=df2[0].tolist()
flag=0
print ("Resulant Index of Headers are:")
for x in range(len(r)):
    l=list(df.loc[x])
    if(set(r).issubset(set(l))):
        flag = 1
    if flag==1:
        print(x," ",l[x])
