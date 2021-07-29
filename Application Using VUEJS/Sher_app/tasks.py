
import pandas as pd
from sqlalchemy import create_engine
from celery import shared_task
from pandas.util import hash_pandas_object

# This CSV doesn't have a header so pass
# column names as an argument


columns = [
    "Hash",
    "Emp_ID",
    "Name_Prefix",
    "First_Name",
    "Middle_Initial",
    "Last_Name",
    "Gender",
    "Email",
    "Father_Name",
    "Mother_Name",

]

# Instantiate sqlachemy.create_engine object
engine = create_engine('postgresql://postgres:soccerlust@localhost:5432/Sherin_DB')
postgreSQLConnection = engine.connect()
postgreSQLTable = "csv_dataset7"



# Save the data from dataframe to
# postgres table "csv_dataset2"
@shared_task
def fun():
    for df in pd.read_csv("1000_rec.csv", chunksize=1000):
        c = hash_pandas_object(df)
        df.insert(loc=0, column='Hash', value=c)
        # a = df.read_sql_table("csv_dataset7", engine)
        a = pd.read_sql("select * from \"csv_dataset7\"", postgreSQLConnection)
        if c not in a.Hash:
            df.to_sql(
                postgreSQLTable,
                postgreSQLConnection,
                index=False,
                if_exists='append'  # if the table already exists, append this data
            )
