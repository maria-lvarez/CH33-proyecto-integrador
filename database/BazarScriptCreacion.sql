-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema GranBazardb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema GranBazardb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `GranBazardb` DEFAULT CHARACTER SET utf8 ;
USE `GranBazardb` ;

-- -----------------------------------------------------
-- Table `GranBazardb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GranBazardb`.`categorias` (
  `idcategorias` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GranBazardb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GranBazardb`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(150) NOT NULL,
  `telefono` INT NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GranBazardb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GranBazardb`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `estado_del_producto` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `precio` DECIMAL(10) NOT NULL,
  `imagen` VARCHAR(500) NOT NULL,
  `envio` VARCHAR(45) NOT NULL,
  `categorias_idcategorias` INT NOT NULL,
  `usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `categorias_idcategorias`, `usuarios_idusuarios`),
  INDEX `fk_productos_categorias_idx` (`categorias_idcategorias` ASC) VISIBLE,
  INDEX `fk_productos_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categorias`
    FOREIGN KEY (`categorias_idcategorias`)
    REFERENCES `GranBazardb`.`categorias` (`idcategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `GranBazardb`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GranBazardb`.`vendedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GranBazardb`.`vendedores` (
  `idvendedores` INT NOT NULL AUTO_INCREMENT,
  `codigo_postal` INT NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`idvendedores`, `usuarios_idusuarios`),
  INDEX `fk_vendedores_usuarios1_idx` (`usuarios_idusuarios` ASC) VISIBLE,
  CONSTRAINT `fk_vendedores_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `GranBazardb`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
