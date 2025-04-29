-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2021 a las 16:57:03
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `company`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citacionmedica`
--

CREATE TABLE `citacionmedica` (
  `id` int(11) NOT NULL,
  `id_medico` int(100) NOT NULL,
  `fecha` date NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `hora` time NOT NULL,
  `lugar` varchar(200) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `aceptada` BOOLEAN NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citacionmedica`
--

INSERT INTO `citacionmedica` (`id`, `fecha`, `estado`, `hora`,`lugar`,`direccion`, `id_medico`) VALUES
(1, '2021-11-09', 1, '04:00','Ibarra' ,'Juan Montalvo y Calderon',4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medico`
--

CREATE TABLE `medico` (
  `idmedicos` int(100) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `area` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medico`
--

INSERT INTO `medico` (`idmedicos`, `nombre`, `direccion`, `email`, `telefono`, `area`) VALUES
(1, 'miguel', 'cra 22 calle 23', 'mig14@gmail.com', '304568952', 'Cardiologia'),
(3, 'Lucas', 'carrera 22 calle 12', 'lu14@gmail.com', '3046735698', 'Neurologo'),
(4, 'Andres', 'carrera 22 17-45', 'andy@gmail.com', '3045623232', 'General');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `idpaciente` int(100) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `ciudad` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL,
  `cedula` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`idpaciente`, `nombre`, `email`, `ciudad`, `telefono`, `cedula`) VALUES
(1, 'Andrea', 'andrea@gmail.com', 'Baranoa', '3046744258', '1048223562'),
(3, 'Piedad ', 'pieda@gmail.com', 'Baranoa', '3045986363', '1048223569'),
(4, 'Victor', 'victor@gmail.com', 'Baranoa', '3046745262', '72014523');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

CREATE TABLE `reportes` (
  `idreportes` int(100) NOT NULL,
  `fechacita` date NOT NULL,
  `pago` int(100) NOT NULL,
  `costo` int(100) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `idmedico` int(100) NOT NULL,
  `idpaciente` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idroles` int(100) NOT NULL,
  `namerol` varchar(100) NOT NULL,
  `status` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idroles`, `namerol`, `status`) VALUES
(1, 'paciente', 1),
(2, 'administrador', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(200) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `idrol` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `idrol`) VALUES
(4, 'lucas Flores', 'lucas@gmail.com', '123456', 0),
(6, 'Andrea', 'andy@gmail.com', '123425', 0);

--
-- Índices para tablas volcadas
--

CREATE TABLE `citas_paciente`(
    `id` int(11) NOT NULL,
   `id_citamedica` int(11) NOT NULL,
   `id_paciente` int(100) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




--
-- Indices de la tabla `citacionmedica`
--
ALTER TABLE `citacionmedica`
  ADD PRIMARY KEY (`id`);


  ALTER TABLE `citas_paciente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_citamedica` (`id_citamedica`,`id_paciente`),
  ADD KEY `id_paciente` (`id_paciente`);

--
-- Indices de la tabla `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`idmedicos`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`idpaciente`);

--
-- Indices de la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD PRIMARY KEY (`idreportes`),
  ADD KEY `idmedico` (`idmedico`,`idpaciente`),
  ADD KEY `idpaciente` (`idpaciente`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idroles`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idrol` (`idrol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citacionmedica`
--
ALTER TABLE `citacionmedica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `medico`
  MODIFY `idmedicos` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `medico`
--
ALTER TABLE `citas_paciente`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `idpaciente` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `reportes`
--
ALTER TABLE `reportes`
  MODIFY `idreportes` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idroles` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citacionmedica`
--
ALTER TABLE `citacionmedica`
  ADD CONSTRAINT `citacionmedica_ibfk_2` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`idmedicos`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `citas_paciente`
  ADD CONSTRAINT `citas_paciente_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `citas_paciente_ibfk_2` FOREIGN KEY (`id_citamedica`) REFERENCES `citacionmedica` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
--
-- Filtros para la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD CONSTRAINT `reportes_ibfk_1` FOREIGN KEY (`idmedico`) REFERENCES `medico` (`idmedicos`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reportes_ibfk_2` FOREIGN KEY (`idpaciente`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
