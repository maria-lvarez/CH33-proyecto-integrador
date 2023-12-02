INSERT INTO mydb.categoria (nombre) VALUES ('Ropa y Accesorios');
INSERT INTO mydb.categoria (nombre) VALUES ('Electrónicos');
INSERT INTO mydb.categoria (nombre) VALUES ('Electrodomésticos');
INSERT INTO mydb.categoria (nombre) VALUES ('Entretenimiento');
INSERT INTO mydb.categoria (nombre) VALUES ('Recién Añadidos');

INSERT INTO mydb.compradores (nombre, correo, telefono, contraseña) VALUES ('Emilty', 'emilty@gmail.com', 3142232789, 'Cheeto21');
INSERT INTO mydb.compradores (nombre, correo, telefono, contraseña) VALUES ('Majo', 'majo@hotmail.com', 5589651584, 'Trakalosas123');
INSERT INTO mydb.compradores (nombre, correo, telefono, contraseña) VALUES ('Natividad', 'natFu@gmail.com', 4431547895, 'churro58');
INSERT INTO mydb.compradores (nombre, correo, telefono, contraseña) VALUES ('Lau', 'lau@hotmail.com', 8452658963, 'veggies23');
INSERT INTO mydb.compradores (nombre, correo, telefono, contraseña) VALUES ('Den', 'deni@gmail.com', 1524569845, 'chetito56');

INSERT INTO mydb.vendedores (nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, contraseña_vendedores) VALUES ('Jaqui', 'jacjac@hotmail.com', 54236, 'Av Morelos 53', 5514856985,'piopio59');
INSERT INTO mydb.vendedores (nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, contraseña_vendedores) VALUES ('Esteph', 'esteph@hotmail.com', 48526, 'Blv Arriaga 48', 6512548952,'gatito01');
INSERT INTO mydb.vendedores (nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, contraseña_vendedores) VALUES ('Carmen', 'carmenav@gmail.com', 58412, 'Av Camelinas', 4431547852,'Guts22');
INSERT INTO mydb.vendedores (nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, contraseña_vendedores) VALUES ('Caro', 'caro@hotmail.com', 48523, 'Av Madero 22', 4584125632,'perrito8');
INSERT INTO mydb.vendedores (nombre_vendedores, correo_vendedores, codigo_postal_vendedores, direccion_vendedores, telefono_vendedores, contraseña_vendedores) VALUES ('Ruth', 'ruth@hotmail.com', 89521, 'Av Jesús', 4512458963,'patito23');

INSERT INTO mydb.productos (nombre, estado_del_producto, descripcion, precio, imagen, envio, categoria_idcategoria, compradores_idcompradores, vendedores_idvendedores) VALUES ('Blazer', 'Segunda mano', 'Blazer azul', 299, 'blazer.jpg', 'Estafeta', 1, 1, 1);
INSERT INTO mydb.productos (nombre, estado_del_producto, descripcion, precio, imagen, envio, categoria_idcategoria, compradores_idcompradores, vendedores_idvendedores) VALUES ('Tostadora', 'Segunda mano', 'Tostadora rosa', 150, 'tostadora.jpg', 'Correos de México', 3, 2, 2);
INSERT INTO mydb.productos (nombre, estado_del_producto, descripcion, precio, imagen, envio, categoria_idcategoria, compradores_idcompradores, vendedores_idvendedores) VALUES ('Cien Años de Soledad', 'Nuevo con etiqueta', 'Libro Cien Años de Soledad', 200, 'libro.jpg', 'Fedex', 4, 3, 3);
INSERT INTO mydb.productos (nombre, estado_del_producto, descripcion, precio, imagen, envio, categoria_idcategoria, compradores_idcompradores, vendedores_idvendedores) VALUES ('Pantalón de Mezclilla', 'Nuevo sin etiqueta', 'Pantalón de mezclilla verde', 150, 'pantalon.jpg', 'Estafeta', 1, 4, 4);
INSERT INTO mydb.productos (nombre, estado_del_producto, descripcion, precio, imagen, envio, categoria_idcategoria, compradores_idcompradores, vendedores_idvendedores) VALUES ('Televisión 75 pulgadas', 'Seminuevo', 'Pantalla de 75 pulgadas', 599, 'television.jpg', 'Fedex', 2, 5, 5);


INSERT INTO mydb.ventas (fecha_de_venta, metodo_de_pago, total, compradores_idcompradores) VALUES ('23-11-29', 'Tarjeta débito', 299, 1);
INSERT INTO mydb.ventas (fecha_de_venta, metodo_de_pago, total, compradores_idcompradores) VALUES ('23-11-28', 'Tarjeta crédito', 150, 2);
INSERT INTO mydb.ventas (fecha_de_venta, metodo_de_pago, total, compradores_idcompradores) VALUES ('23-11-27', 'Tarjeta débito', 200, 3);
INSERT INTO mydb.ventas (fecha_de_venta, metodo_de_pago, total, compradores_idcompradores) VALUES ('23-11-27', 'Tarjeta crédito', 150, 4);
INSERT INTO mydb.ventas (fecha_de_venta, metodo_de_pago, total, compradores_idcompradores) VALUES ('23-11-26', 'Tarjeta débito', 599, 5);