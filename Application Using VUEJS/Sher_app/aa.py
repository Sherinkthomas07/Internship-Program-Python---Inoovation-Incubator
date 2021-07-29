import pandas as pd
import hashlib
from pandas.util import hash_pandas_object

h1 = hashlib.md5()
with open('50000_rec.csv','rb') as f:

    df = pd.read_csv(f)
    #print(df)
    c = hash_pandas_object(df)
    print(c)
    #hasher = hash(df.values.tostring())
    #print(hasher)

    # c = df.set_index(pd.util.hash_pandas_object(df), drop=False, inplace=True)
    # c = df.apply(lambda x: hash(tuple(x)), axis=1)
    # c = df.apply(lambda row: pd.util.hash_pandas_object(row), axis=1)
    # print (df)