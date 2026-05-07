from flask import Flask
from flask_cors import CORS
from config import Config  # Importamos tu clase Config
from models.database import db
from routes.inventory import inventory_bp

app = Flask(__name__)
CORS(app)

# Cargamos la configuración desde tu clase Config
app.config.from_object(Config)

# Inicializamos la base de datos
db.init_app(app)

# Registramos las rutas
app.register_blueprint(inventory_bp)

if __name__ == '__main__':
    with app.app_context():
       
        db.create_all() 
    app.run(debug=True, port=5000)