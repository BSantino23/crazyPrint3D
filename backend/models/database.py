from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from models.database import db

class Producto(db.Model):
    __tablename__ = 'productos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    categoria = db.Column(db.String(50), nullable=False)
    imagen_url = db.Column(db.String(255))
    precio = db.Column(db.Float)

    def to_dict(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "categoria": self.categoria,
            "imagen_url": self.imagen_url,
            "precio": self.precio
        }

class Consulta(db.Model):
    __tablename__ = 'consultas'
    id = db.Column(db.Integer, primary_key=True)
    nombre_cliente = db.Column(db.String(100))
    email = db.Column(db.String(100))
    mensaje = db.Column(db.Text)