import pandas as pd
from sqlalchemy import create_engine
from celery import shared_task
from pandas.util import hash_pandas_object
from sqlalchemy import Table, Column, Integer, String, MetaData

meta = MetaData()

engine = create_engine('postgresql://postgres:soccerlust@localhost:5432/Sherin_DB')
postgreSQLConnection = engine.connect()

csv_dataset11 = Table(
    'csv_dataset11', meta,
    Column('Hash', Integer),
    Column('Emp_ID', Integer),
    Column('Name_Prefix', String),
    Column('First_Name', String),
    Column('Middle_Initial', String),
    Column('Last_Name', String),
    Column('Gender', String),
    Column('Email', String),
    Column('Father_Name', String),
    Column('Mother_Name', String),
)
meta.create_all(engine)

for df in pd.read_csv("1000_rec.csv", chunksize=1000):
    c = hash_pandas_object(df)
    df.insert(loc=0, column='Hash', value=c)
    df.to_sql(
        'csv_dataset11',
        postgreSQLConnection,
        index=False,
        if_exists='append'  # if the table already exists, append this data
    )

    #result = pd.read_sql_table("csv_dataset11", postgreSQLConnection, "Hash")
    #result = pd.read_sql_query('''select * from csv_dataset10''', postgreSQLConnection)

    result = '''select * from csv_dataset11'''
    print("result=", result)
    x = result.__getitem__(result.Hash)
    postgreSQLConnection.close()



exec(open('tasks.py','r').read())
