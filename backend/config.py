# backend/config.py
from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    # Variables de entorno para MySQL
    user = os.getenv('MYSQL_USER')
    password = os.getenv('MYSQL_PASSWORD')
    host = os.getenv('MYSQL_HOST')
    database = os.getenv('MYSQL_DB')

    # URI de conexión usando PyMySQL
    SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{user}:{password}@{host}/{database}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY') or 'dev-key-123'