-- MySQL dump 10.13  Distrib 8.0.31, for macos12.6 (x86_64)
--
-- Host: localhost    Database: rock_digital_blog
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `portfolio_items`
--

DROP TABLE IF EXISTS `portfolio_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portfolio_items` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` longtext,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `portfolio_items_created_by_id_fk` (`created_by_id`),
  KEY `portfolio_items_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `portfolio_items_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `portfolio_items_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio_items`
--

LOCK TABLES `portfolio_items` WRITE;
/*!40000 ALTER TABLE `portfolio_items` DISABLE KEYS */;
INSERT INTO `portfolio_items` VALUES (1,'Genuine LLC','Responsive Website Built Using Bootstrap v5.2','2022-10-06 09:17:35.037000','2022-10-06 11:25:10.710000','2022-10-06 09:21:26.235000',1,1,'https://genuinellc.com'),(2,'Spa','This is the spa page','2022-10-06 10:12:46.202000','2022-10-06 11:25:37.993000','2022-10-06 10:12:49.714000',1,1,'https://thebeautyambassador.com/spa-website-design'),(3,'Chateau Dijon Townhomes','Complete redesign.','2022-10-06 11:12:22.594000','2022-10-21 15:27:59.629000','2022-10-06 11:12:23.669000',1,1,'https://chateau-dijon.com'),(4,'Drip eCommerce ',NULL,'2022-10-21 15:07:24.550000','2022-10-21 15:28:58.179000','2022-10-21 15:07:25.776000',1,1,'https://drip-ecomm.netlify.app/'),(5,'Nails By...',NULL,'2022-10-21 15:51:17.866000','2022-10-21 16:33:32.167000',NULL,1,1,'https://nails-by.netlify.app/');
/*!40000 ALTER TABLE `portfolio_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-27  9:43:16
