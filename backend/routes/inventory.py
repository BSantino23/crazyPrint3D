from flask import Blueprint, jsonify, request
from models.database import db, Producto, Consulta

inventory_bp = Blueprint('inventory', __name__)

# 1. Ruta para que React pida TODOS los productos
@inventory_bp.route('/api/productos', methods=['GET'])
def get_productos():
    productos = Producto.query.all()
    return jsonify([p.to_dict() for p in productos])

# 2. Ruta para filtrar productos por CATEGORÍA (la que me pediste)
@inventory_bp.route('/api/productos/<cat>', methods=['GET'])
def filtrar_productos(cat):
    # Esto busca productos que coincidan con la categoría clickeada
    # cat puede ser 'Repuestos técnicos', 'Accesorios funcionales', etc.
    productos = Producto.query.filter_by(categoria=cat).all()
    return jsonify([p.to_dict() for p in productos])

# 3. Ruta para recibir el formulario de contacto
@inventory_bp.route('/api/contacto', methods=['POST'])
def post_contacto():
    data = request.json
    nueva_consulta = Consulta(
        nombre_cliente=data.get('nombre'),
        email=data.get('email'),
        mensaje=data.get('mensaje')
    )
    db.session.add(nueva_consulta)
    db.session.commit()
    return jsonify({"status": "success", "message": "Consulta guardada en Workbench"}), 201