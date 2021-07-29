import pandas as pd
from sqlalchemy import create_engine
from celery import shared_task
from sqlalchemy import Table, Column, Integer, String, MetaData

meta = MetaData()

engine = create_engine('postgresql://postgres:soccerlust@localhost:5432/Sherin_DB')
csv_dataset = Table(
    'csv_dataset', meta,
    Column('Hash', String),
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


@shared_task
def fun():
    postgreSQLConnection = engine.connect()
    result = pd.read_sql_query('''select * from csv_dataset''', postgreSQLConnection)
    df = pd.read_csv("1000_rec.csv")
    df.drop_duplicates()

    df['Hash'] = df.apply(
        lambda dfrow: hash(tuple(dfrow)),
        axis=1
    )

    #df.drop_duplicates(subset="Hash", keep='first', inplace=False)
    # print(df)
    df = df[~df.Hash.isin(result['Hash'].unique())]    # filtering hash values

    df.to_sql(
        'csv_dataset',
        engine,
        index=False,
        if_exists='append'  # if the table already exists, append this data
    )
    postgreSQLConnection.close()
