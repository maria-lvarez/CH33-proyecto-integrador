-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`compradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`compradores` (
  `idcompradores` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(150) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcompradores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`vendedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`vendedores` (
  `idvendedores` INT NOT NULL AUTO_INCREMENT,
  `nombre_vendedores` VARCHAR(45) NOT NULL,
  `correo_vendedores` VARCHAR(45) NOT NULL,
  `codigo_postal_vendedores` INT NOT NULL,
  `direccion_vendedores` VARCHAR(45) NOT NULL,
  `telefono_vendedores` VARCHAR(45) NOT NULL,
  `contraseña_vendedores` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idvendedores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `estado_del_producto` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `precio` DECIMAL(10) NOT NULL,
  `imagen` VARCHAR(500) NOT NULL,
  `envio` VARCHAR(45) NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  `compradores_idcompradores` INT NOT NULL,
  `vendedores_idvendedores` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `categoria_idcategoria`, `compradores_idcompradores`, `vendedores_idvendedores`),
  INDEX `fk_productos_categoria_idx` (`categoria_idcategoria` ASC) VISIBLE,
  INDEX `fk_productos_compradores1_idx` (`compradores_idcompradores` ASC) VISIBLE,
  INDEX `fk_productos_vendedores1_idx` (`vendedores_idvendedores` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ventas` (
  `idventas` INT NOT NULL AUTO_INCREMENT,
  `fecha_de_venta` DATETIME NOT NULL,
  `metodo_de_pago` VARCHAR(45) NOT NULL,
  `total` DECIMAL(10) NOT NULL,
  `compradores_idcompradores` INT NOT NULL,
  PRIMARY KEY (`idventas`, `compradores_idcompradores`),
  INDEX `fk_ventas_compradores1_idx` (`compradores_idcompradores` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
