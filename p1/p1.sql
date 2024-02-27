SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+01:00";

CREATE TABLE `clientes` (

    `NIF` varchar(9) NOT NULL PRIMARY KEY,
    `Nombre` varchar(50) NOT NULL,
    `Dirección` varchar(30) NOT NULL,
    `E-mail` varchar(30) NOT NULL,
    `Teléfono` int(9) NOT NULL,
    `Descripción` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

CREATE TABLE `pedidos` (
  `Número de pedido` int(8) NOT NULL PRIMARY KEY,
  `Cliente` varchar(9) NOT NULL KEY REFERENCES `clientes` (`NIF`),
  `Producto` int(8) NOT NULL KEY REFERENCES `productos` (`Código del producto`),
  `Cantidad` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

CREATE TABLE `productos` (
  `Código del producto` int(8) NOT NULL PRIMARY KEY,
  `Nombre` varchar(15) NOT NULL,
  `Precio` float NOT NULL,
  `Descripción` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

