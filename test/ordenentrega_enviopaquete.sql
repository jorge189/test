CREATE DATABASE  IF NOT EXISTS `ordenentrega` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ordenentrega`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: ordenentrega
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `enviopaquete`
--

DROP TABLE IF EXISTS `enviopaquete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enviopaquete` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombreR` varchar(45) DEFAULT NULL,
  `calleR` varchar(45) DEFAULT NULL,
  `cpR` int DEFAULT NULL,
  `coloniaR` varchar(45) DEFAULT NULL,
  `edoR` varchar(45) DEFAULT NULL,
  `nombreD` varchar(45) DEFAULT NULL,
  `calleD` varchar(45) DEFAULT NULL,
  `cpD` int DEFAULT NULL,
  `coloniaD` varchar(45) DEFAULT NULL,
  `edoD` varchar(45) DEFAULT NULL,
  `peso` json DEFAULT NULL,
  `alto` json DEFAULT NULL,
  `ancho` json DEFAULT NULL,
  `contenido` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enviopaquete`
--

LOCK TABLES `enviopaquete` WRITE;
/*!40000 ALTER TABLE `enviopaquete` DISABLE KEYS */;
INSERT INTO `enviopaquete` VALUES (1,'pedro2','monaco',52919,'cuaititlan','durango','santin2','iturbide',52918,'emiliano zapata','mexico','[\"10\", \"18\", \"12\", \"15\", \"10\", \"13\", \"20\", \"15\", \"\"]','[\"10\", \"19\", \"16\", \"20\", \"18\", \"\", \"\", \"\", \"\"]','[\"10\", \"100\", \"16\", \"39\", \"40\", \"\", \"\", \"\", \"\"]','[\"cajas\", \"verdes\", \"perros\", \"nuevo\", \"nuevo2\", \"\", \"\", \"\", \"\"]'),(2,'roberto','magnolia',52918,'emiliano zapata','mexico','pedro','iturbide',52918,'nicolas romero','mexico','[\"100\"]','[\"100\"]','[\"10\"]','[\"algo\"]'),(3,'jose','tabasco',52919,'cuaititlan','durango','sofi','teapa',52919,'cuaititlan','durango','[\"10\", \"5\"]','[\"10\", \"6\"]','[\"10\", \"6\"]','[\"perros\", \"joes\"]'),(4,'act2','act2',52918,'emiliano zapata','mexico','act2','act2',52918,'emiliano zapata','mexico','[\"10\", \"4\", \"7\", \"13\"]','[\"30\", \"6\", \"9\", \"15\"]','[\"20\", \"5\", \"8\", \"14\"]','[\"cajass\", \"pedrro\", \"algo\", \"baraja\"]');
/*!40000 ALTER TABLE `enviopaquete` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-06 19:03:55
