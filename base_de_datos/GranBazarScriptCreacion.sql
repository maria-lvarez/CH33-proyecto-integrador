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
-- Table `GranBazardb`.`Compradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GranBazardb`.`Compradores` (
  `idcompradores` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(150) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcompradores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GranBazardb`.`vendedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GranBazardb`.`vendedores` (
  `idvendedores` INT NOT NULL AUTO_INCREMENT,
  `nombre_vendedores` VARCHAR(45) NOT NULL,
  `correo_vendedores` VARCHAR(45) NOT NULL,
  `codigo_postal_vendedores` INT NOT NULL,
  `direccion_vendedores` VARCHAR(45) NOT NULL,
  `telefono_vendedores` VARCHAR(45) NOT NULL,
  `Contraseña_vendedores` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idvendedores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GranBazardb`.`Usuariosp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GranBazardb`.`Usuariosp` (
  `idUsuariosp` INT NOT NULL AUTO_INCREMENT,
  `Compradores_idcompradores` INT NOT NULL,
  `vendedores_idvendedores` INT NOT NULL,
  PRIMARY KEY (`idUsuariosp`, `Compradores_idcompradores`, `vendedores_idvendedores`),
  INDEX `fk_Usuariosp_Compradores1_idx` (`Compradores_idcompradores` ASC) VISIBLE,
  INDEX `fk_Usuariosp_vendedores1_idx` (`vendedores_idvendedores` ASC) VISIBLE,
  CONSTRAINT `fk_Usuariosp_Compradores1`
    FOREIGN KEY (`Compradores_idcompradores`)
    REFERENCES `GranBazardb`.`Compradores` (`idcompradores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuariosp_vendedores1`
    FOREIGN KEY (`vendedores_idvendedores`)
    REFERENCES `GranBazardb`.`vendedores` (`idvendedores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GranBazardb`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `GranBazardb`.`Ventas` (
  `idVentas` INT NOT NULL AUTO_INCREMENT,
  `Fecha_de_venta` VARCHAR(45) NOT NULL,
  `Metodo_de_pago` VARCHAR(45) NOT NULL,
  `Total` DECIMAL(10) NOT NULL,
  `Usuariosp_idUsuariosp` INT NOT NULL,
  `Usuariosp_Compradores_idcompradores` INT NOT NULL,
  `Usuariosp_vendedores_idvendedores` INT NOT NULL,
  PRIMARY KEY (`idVentas`, `Usuariosp_idUsuariosp`, `Usuariosp_Compradores_idcompradores`, `Usuariosp_vendedores_idvendedores`),
  INDEX `fk_Ventas_Usuariosp1_idx` (`Usuariosp_idUsuariosp` ASC, `Usuariosp_Compradores_idcompradores` ASC, `Usuariosp_vendedores_idvendedores` ASC) VISIBLE,
  CONSTRAINT `fk_Ventas_Usuariosp1`
    FOREIGN KEY (`Usuariosp_idUsuariosp` , `Usuariosp_Compradores_idcompradores` , `Usuariosp_vendedores_idvendedores`)
    REFERENCES `GranBazardb`.`Usuariosp` (`idUsuariosp` , `Compradores_idcompradores` , `vendedores_idvendedores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  `Ventas_idVentas` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `categorias_idcategorias`, `Ventas_idVentas`),
  INDEX `fk_productos_categorias_idx` (`categorias_idcategorias` ASC) VISIBLE,
  INDEX `fk_productos_Ventas1_idx` (`Ventas_idVentas` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categorias`
    FOREIGN KEY (`categorias_idcategorias`)
    REFERENCES `GranBazardb`.`categorias` (`idcategorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_Ventas1`
    FOREIGN KEY (`Ventas_idVentas`)
    REFERENCES `GranBazardb`.`Ventas` (`idVentas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
