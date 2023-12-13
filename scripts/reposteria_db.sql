-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: reposteria_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(30) NOT NULL,
  `price` smallint(6) NOT NULL,
  `discount` smallint(6) NOT NULL,
  `product_description` varchar(800) DEFAULT NULL,
  `ingredients` varchar(800) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `product_type` varchar(10) NOT NULL,
  `stock` smallint(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_name` (`product_name`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Torta Rogel',2000,20,'Este es el postre más argentino de todos, se trata de un alfajor gigante elaborado a base de una masa de manteca, harina y yema de huevo. Con ésta se forman discos y entre ellos se colocan generosas capas de dulce de leche para finalizar con un gran copete de merengue italiano.','Ingredientes de un producto.','imagen-1702239939453-706190161.jpeg','torta',20),(2,'Torta Balcarce',2000,0,'Creada en 1950 en una confitería de la ciudad de Balcarce bajo el nombre de ‘Imperial’, cambió su nombre luego de ser vendida a la empresa homónima marplatense. Si bien técnicamente se trata de un postre, es una preparación que ha sabido endulzar el paladar de los argentinos desde hace décadas. Preparada a base de ingredientes simples, deleita a grandes y chicos gracias a su sencillez y a su combinación de texturas crujientes, suaves y húmedas. Se elabora con bizcochuelo de vainilla, merengue seco, dulce de leche, crema chantilly, castañas en almíbar y tiene una cubierta de azúcar impalpable grabada a fuego.','Ingredientes de un producto.','imagen-1702239967806-601971128.jpeg','torta',10),(3,'Selva Negra',2000,10,'Es una receta clásica que tiene cientos de años de antigüedad: sus orígenes se remontan al siglo XVI y su nombre hace referencia a la región alemana famosa por sus cerezas agrias, utilizadas para fabricar el kirsch. La versión argentina lleva bizcochuelo de cacao amargo, almendras, crema chantilly, cerezas en almíbar y grandes trozos de chocolate.','Ingredientes de un producto.','imagen-1702240004278-805912718.jpg','torta',5),(4,'Lemon Pie',2000,0,'Esta torta fue traída a nuestro país por los inmigrantes ingleses en los comienzos del siglo XX. Del famoso “té de las 5” pasó a ser un sabor obligado en todas las pastelerías. La base es una masa quebrada dulce, con un corazón de crema de limón y una decoración de abundante merengue italiano.','Ingredientes de un producto.','imagen-1702240024053-247181704.jpg','torta',10),(5,'Pastafrola',2000,0,'Otra especialidad traía de la mano de inmigrantes: la pasta frola es de origen italiano, creada en su momento por monjas que habitaban en el monasterio de San Gregorio Armeno, en Nápoles. Es un sabor bien clásico que se encuentra en todas las panaderías argentinas. Su base es una masa quebrada dulce, con relleno de dulce de membrillo y decorada con un enrejado de tiras de la misma masa. Hay quienes han experimentado con otros rellenos como dulce de batata, mermelada de frambuesa o incluso el célebre dulce de leche.','Ingredientes de un producto.','imagen-1702240045555-196016522.jpg','torta',100),(8,'Medialuna',100,5,'Medialunas de grasa: son medialunas saladas y más finitas ¡pero sumamente crocantes y adictivas! están hechas de grasa y margarina.\r\n\r\nMedialunas de manteca: son más gorditas, llevan un toque de esencia de vainilla y van cubiertas por una capa de almíbar, lo cual las hace más dulces.','Lista de ingredientes.','imagen-1702240409611-564352109.jpg','masa-dulce',100),(9,'Vigilantes',100,0,'De forma bien alargada, imitando un bastón, estas facturas pueden ir rellenas de membrillo, crema pastelera o simplemente espolvoreadas con un poquito de azúcar. \r\n\r\nComo muchas facturas argentinas, su nombre se originó a raíz de una huelga sindical de inmigrantes italianos, quienes habían decidido cambiar los nombres de los pasteles para llamar la atención con su causa anarquista. En este caso, los vigilantes son una clara referencia a los policías. ','Lista de ingredientes.','imagen-1702240462312-449345090.jpeg','masa-dulce',100),(10,'Bola de fraile',100,0,'También conocidas bajo el nombre «suspiro de monja» o «berlinesa», estas facturas se destacan por su masa esponjosa y frita, ¡que hace que se nos haga agua la boca! Bolas doradas espolvoreadas con azúcar, las podemos encontrar rellenas de dulce de leche, crema pastelera, o solas.  ','Lista de ingredientes.','imagen-1702240515902-969742549.jpg','masa-dulce',100),(11,'Cañoncito',200,0,'Irónico guiño militar mediante, estos bizcochos con masa de hojaldre rellena de dulce de leche, son mucho más simpáticos que lo que su nombre alude. Se trata de la opción más aconsejable cuando realmente tenemos hambre, y van cubiertos por una lluvia de azúcar impalpable que les da el toque final.  También los pueden encontrar bañados con almendras y nueces. ','Lista de ingredientes.','imagen-1702240605546-46247661.jpg','masa-dulce',100);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `home` varchar(50) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `category` varchar(5) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mauro','Rendón','admin@admin.com','Domicilio 1234','$2a$10$rz31QrRxKsFPPSVoImvfo.TeuAjrkByFzPX.Y9YHKoSbHXLfsLR5y','admin','icon.png'),(2,'Jane','Doe','user@user.com','Domicilio 5678','$2a$10$uAECKb1ZTua3tJyymUhi.uH2Va3JSgA08LAp4Pajlg2YiMcGuifOu','user','icon.png'),(8,'Mauro','Rendon','a@a.com','Generico','$2a$10$QypDamsBGVOCC5AJhWTzXe1JEXmPTpsv6WsR0hLh7UkqYe5ZT/O.m','user','imagen-1702419582295-767433407.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-13  8:12:03
