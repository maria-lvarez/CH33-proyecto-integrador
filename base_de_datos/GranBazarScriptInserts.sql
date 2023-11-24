USE granbazardb;

INSERT INTO categorias(nombre) VALUES('Entretenimiento');
INSERT INTO categorias(nombre) VALUES('Electrodomésticos');
INSERT INTO categorias(nombre) VALUES('Electrónicos');
INSERT INTO categorias(nombre) VALUES('Ropa y accesorios');
INSERT INTO categorias(nombre) VALUES('Recién añadidos');

INSERT INTO vendedores(nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, Contraseña_vendedores) VALUES ('Maria Alvarez', 'majoalv@gmail.com','86090','su casa','4433887600', 'Cheeto21');
INSERT INTO vendedores(nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, Contraseña_vendedores) VALUES ('Natalia Fuentes', 'nataliafuentes@gmail.com','70570','su casa1', '4433887700', 'Traka.123');
INSERT INTO vendedores(nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, Contraseña_vendedores) VALUES ('Jaquelin Manzano', 'jaque@gmail.com','71980', 'su casa2', '5510203040', 'Huellitas04');
INSERT INTO vendedores(nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, Contraseña_vendedores) VALUES ('Carmen Ávila', 'carmenavila@gmail.com','71991', 'su casa3','4432558811', 'Ardilla96');
INSERT INTO vendedores(nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, Contraseña_vendedores) VALUES ('Denisse De Esesarte Silva', 'denissedeesesarte12@gmail.com','71090','su casa4', '9541349316', 'Sashita52');


INSERT INTO Compradores(nombre, correo, telefono, contraseña) VALUES ('Mariana de la Rosa', 'marianadelarosa@gmail.com', '9966584732', 'delaRosa21');
INSERT INTO Compradores (nombre, correo, telefono, contraseña) VALUES ('Laura Galeana', 'laugaleana@gmail.com', '7352255359', 'Trakalosita21');
INSERT INTO Compradores (nombre, correo, telefono, contraseña) VALUES ('Emily Barbosa', 'emily@gmail.com', '7228830157', 'Trakalosotas98');
INSERT INTO Compradores (nombre, correo, telefono, contraseña) VALUES ('Estephania Rayas', 'estephvr@gmail.com', '7226570106', 'Gatito3436');
INSERT INTO Compradores (nombre, correo, telefono, contraseña) VALUES ('Estephano', 'estephano@gmail.com', '6598453251', 'Gatote65');


INSERT INTO Usuariosp(Compradores_idcompradores, vendedores_idvendedores) VALUES ( '1', '1');
INSERT INTO Usuariosp(Compradores_idcompradores, vendedores_idvendedores) VALUES ( '2', '2');
INSERT INTO Usuariosp(Compradores_idcompradores, vendedores_idvendedores) VALUES ( '3', '3');
INSERT INTO Usuariosp(Compradores_idcompradores, vendedores_idvendedores) VALUES ( '4', '4');
INSERT INTO Usuariosp(Compradores_idcompradores, vendedores_idvendedores) VALUES ( '5', '5');


INSERT INTO Ventas(Fecha_de_venta, Metodo_de_pago, Total, Usuariosp_idUsuariosp, Usuariosp_Compradores_idcompradores, Usuariosp_vendedores_idvendedores) VALUES ('27/11/23', 'Tarjeta de debito', '320.00', '1', '1', '1');
INSERT INTO Ventas(Fecha_de_venta, Metodo_de_pago, Total, Usuariosp_idUsuariosp, Usuariosp_Compradores_idcompradores, Usuariosp_vendedores_idvendedores) VALUES ('15/12/23', 'Transferencia bancaria', '600.00', '2', '2', '2');
INSERT INTO Ventas(Fecha_de_venta, Metodo_de_pago, Total, Usuariosp_idUsuariosp, Usuariosp_Compradores_idcompradores, Usuariosp_vendedores_idvendedores) VALUES ('24/12/23', 'Tarjeta de credito', '200.00', '3', '3', '3');
INSERT INTO Ventas(Fecha_de_venta, Metodo_de_pago, Total, Usuariosp_idUsuariosp, Usuariosp_Compradores_idcompradores, Usuariosp_vendedores_idvendedores) VALUES ('5/1/24', 'Transferencia bancaria', '450.00', '4', '4', '4');
INSERT INTO Ventas(Fecha_de_venta, Metodo_de_pago, Total, Usuariosp_idUsuariosp, Usuariosp_Compradores_idcompradores, Usuariosp_vendedores_idvendedores) VALUES ('31/10/23', 'Tarjeta de debito', '500.00', '5', '5', '5');


INSERT INTO productos(nombre, estado_del_producto, descripcion, precio, imagen, envio,categorias_idcategorias, Ventas_idVentas) VALUES('Entre los rotos - Alaide Ventura','Nuevo sin etiqueta', 'Libro pasta blanda','150.00','./src/images/telefonoJuguete.jpg', 'Fedex','1','1');
INSERT INTO productos(nombre, estado_del_producto, descripcion, precio, imagen, envio, categorias_idcategorias,Ventas_idVentas) VALUES('Cárdigan','Nuevo sin etiqueta', 'Cárdigan tejido a mano de color blanco','310.00','./src/images/cardigan.jpg', 'Correos de México','4','2');
INSERT INTO productos(nombre, estado_del_producto, descripcion, precio, imagen, envio, categorias_idcategorias,Ventas_idVentas) VALUES('Cámara instantánea','De segunda mano', 'seminueva casi nunca usada','550.00','./src/images/camara.jpg', 'DHL','3','3');
INSERT INTO productos(nombre, estado_del_producto, descripcion, precio, imagen, envio, categorias_idcategorias,Ventas_idVentas) VALUES('Bohemian Rhapsody - Queen','Seminuevo', 'Disco de vinil','600.00','./src/images/Bohemian.jpg', 'Correos de México','1','4');
INSERT INTO productos(nombre, estado_del_producto, descripcion, precio, imagen, envio, categorias_idcategorias,Ventas_idVentas) VALUES('Tocadiscos','Seminuevo', 'Tocadiscos seminuevo con disco de regalo','1100.00','./src/images/tocadiscos.jpg', 'Fedex','3','5');








