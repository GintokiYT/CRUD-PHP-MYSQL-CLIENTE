DROP DATABASE IF EXISTS ventas;
CREATE DATABASE ventas;
USE ventas;

CREATE TABLE clientes(
	codigo VARCHAR(7) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    edad INT(2) NOT NULL,
    telefono INT(9) NOT NULL
);

SELECT * FROM clientes;
