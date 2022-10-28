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
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `alternative_text` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `width` int DEFAULT NULL,
  `height` int DEFAULT NULL,
  `formats` json DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `mime` varchar(255) DEFAULT NULL,
  `size` decimal(10,2) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `preview_url` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `provider_metadata` json DEFAULT NULL,
  `folder_path` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int unsigned DEFAULT NULL,
  `updated_by_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `upload_files_folder_path_index` (`folder_path`),
  KEY `files_created_by_id_fk` (`created_by_id`),
  KEY `files_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `files_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `files_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,'pexels-hasan-albari-1229861.jpeg','pexels-hasan-albari-1229861.jpeg','pexels-hasan-albari-1229861.jpeg',6000,4000,'{\"large\": {\"ext\": \".jpeg\", \"url\": \"/uploads/large_pexels_hasan_albari_1229861_5d4d0094b8.jpeg\", \"hash\": \"large_pexels_hasan_albari_1229861_5d4d0094b8\", \"mime\": \"image/jpeg\", \"name\": \"large_pexels-hasan-albari-1229861.jpeg\", \"path\": null, \"size\": 39.07, \"width\": 1000, \"height\": 667}, \"small\": {\"ext\": \".jpeg\", \"url\": \"/uploads/small_pexels_hasan_albari_1229861_5d4d0094b8.jpeg\", \"hash\": \"small_pexels_hasan_albari_1229861_5d4d0094b8\", \"mime\": \"image/jpeg\", \"name\": \"small_pexels-hasan-albari-1229861.jpeg\", \"path\": null, \"size\": 15.21, \"width\": 500, \"height\": 333}, \"medium\": {\"ext\": \".jpeg\", \"url\": \"/uploads/medium_pexels_hasan_albari_1229861_5d4d0094b8.jpeg\", \"hash\": \"medium_pexels_hasan_albari_1229861_5d4d0094b8\", \"mime\": \"image/jpeg\", \"name\": \"medium_pexels-hasan-albari-1229861.jpeg\", \"path\": null, \"size\": 26.39, \"width\": 750, \"height\": 500}, \"thumbnail\": {\"ext\": \".jpeg\", \"url\": \"/uploads/thumbnail_pexels_hasan_albari_1229861_5d4d0094b8.jpeg\", \"hash\": \"thumbnail_pexels_hasan_albari_1229861_5d4d0094b8\", \"mime\": \"image/jpeg\", \"name\": \"thumbnail_pexels-hasan-albari-1229861.jpeg\", \"path\": null, \"size\": 5.42, \"width\": 234, \"height\": 156}}','pexels_hasan_albari_1229861_5d4d0094b8','.jpeg','image/jpeg',1739.14,'/uploads/pexels_hasan_albari_1229861_5d4d0094b8.jpeg',NULL,'local',NULL,'/','2022-10-03 19:29:03.692000','2022-10-03 19:29:03.692000',1,1),(2,'genuinellc.com_1024.png','genuinellc.com_1024.png','genuinellc.com_1024.png',2048,2140,'{\"large\": {\"ext\": \".png\", \"url\": \"/uploads/large_genuinellc_com_1024_cf73bfd997.png\", \"hash\": \"large_genuinellc_com_1024_cf73bfd997\", \"mime\": \"image/png\", \"name\": \"large_genuinellc.com_1024.png\", \"path\": null, \"size\": 1642.51, \"width\": 957, \"height\": 1000}, \"small\": {\"ext\": \".png\", \"url\": \"/uploads/small_genuinellc_com_1024_cf73bfd997.png\", \"hash\": \"small_genuinellc_com_1024_cf73bfd997\", \"mime\": \"image/png\", \"name\": \"small_genuinellc.com_1024.png\", \"path\": null, \"size\": 446.19, \"width\": 479, \"height\": 500}, \"medium\": {\"ext\": \".png\", \"url\": \"/uploads/medium_genuinellc_com_1024_cf73bfd997.png\", \"hash\": \"medium_genuinellc_com_1024_cf73bfd997\", \"mime\": \"image/png\", \"name\": \"medium_genuinellc.com_1024.png\", \"path\": null, \"size\": 952.14, \"width\": 718, \"height\": 750}, \"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_genuinellc_com_1024_cf73bfd997.png\", \"hash\": \"thumbnail_genuinellc_com_1024_cf73bfd997\", \"mime\": \"image/png\", \"name\": \"thumbnail_genuinellc.com_1024.png\", \"path\": null, \"size\": 52.89, \"width\": 149, \"height\": 156}}','genuinellc_com_1024_cf73bfd997','.png','image/png',4818.87,'/uploads/genuinellc_com_1024_cf73bfd997.png',NULL,'local',NULL,'/','2022-10-06 09:17:28.240000','2022-10-06 09:17:28.240000',1,1),(3,'spa2-1024.jpg','spa2-1024.jpg','spa2-1024.jpg',2799,2876,'{\"large\": {\"ext\": \".jpg\", \"url\": \"/uploads/large_spa2_1024_747cfc75ac.jpg\", \"hash\": \"large_spa2_1024_747cfc75ac\", \"mime\": \"image/jpeg\", \"name\": \"large_spa2-1024.jpg\", \"path\": null, \"size\": 93.25, \"width\": 973, \"height\": 1000}, \"small\": {\"ext\": \".jpg\", \"url\": \"/uploads/small_spa2_1024_747cfc75ac.jpg\", \"hash\": \"small_spa2_1024_747cfc75ac\", \"mime\": \"image/jpeg\", \"name\": \"small_spa2-1024.jpg\", \"path\": null, \"size\": 27.15, \"width\": 486, \"height\": 500}, \"medium\": {\"ext\": \".jpg\", \"url\": \"/uploads/medium_spa2_1024_747cfc75ac.jpg\", \"hash\": \"medium_spa2_1024_747cfc75ac\", \"mime\": \"image/jpeg\", \"name\": \"medium_spa2-1024.jpg\", \"path\": null, \"size\": 56.8, \"width\": 730, \"height\": 750}, \"thumbnail\": {\"ext\": \".jpg\", \"url\": \"/uploads/thumbnail_spa2_1024_747cfc75ac.jpg\", \"hash\": \"thumbnail_spa2_1024_747cfc75ac\", \"mime\": \"image/jpeg\", \"name\": \"thumbnail_spa2-1024.jpg\", \"path\": null, \"size\": 4.67, \"width\": 152, \"height\": 156}}','spa2_1024_747cfc75ac','.jpg','image/jpeg',510.78,'/uploads/spa2_1024_747cfc75ac.jpg',NULL,'local',NULL,'/','2022-10-06 10:12:42.645000','2022-10-06 10:12:42.645000',1,1),(4,'chateau-dijon.com.png','chateau-dijon.com.png','chateau-dijon.com.png',1200,1259,'{\"large\": {\"ext\": \".png\", \"url\": \"/uploads/large_chateau_dijon_com_32d560b223.png\", \"hash\": \"large_chateau_dijon_com_32d560b223\", \"mime\": \"image/png\", \"name\": \"large_chateau-dijon.com.png\", \"path\": null, \"size\": 1424.11, \"width\": 953, \"height\": 1000}, \"small\": {\"ext\": \".png\", \"url\": \"/uploads/small_chateau_dijon_com_32d560b223.png\", \"hash\": \"small_chateau_dijon_com_32d560b223\", \"mime\": \"image/png\", \"name\": \"small_chateau-dijon.com.png\", \"path\": null, \"size\": 380.56, \"width\": 477, \"height\": 500}, \"medium\": {\"ext\": \".png\", \"url\": \"/uploads/medium_chateau_dijon_com_32d560b223.png\", \"hash\": \"medium_chateau_dijon_com_32d560b223\", \"mime\": \"image/png\", \"name\": \"medium_chateau-dijon.com.png\", \"path\": null, \"size\": 821.15, \"width\": 715, \"height\": 750}, \"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_chateau_dijon_com_32d560b223.png\", \"hash\": \"thumbnail_chateau_dijon_com_32d560b223\", \"mime\": \"image/png\", \"name\": \"thumbnail_chateau-dijon.com.png\", \"path\": null, \"size\": 43.54, \"width\": 149, \"height\": 156}}','chateau_dijon_com_32d560b223','.png','image/png',1576.02,'/uploads/chateau_dijon_com_32d560b223.png',NULL,'local',NULL,'/','2022-10-06 11:11:59.223000','2022-10-21 15:27:58.215000',1,1),(5,'RockDigitalLogo-450px.jpeg','RockDigitalLogo-450px.jpeg','RockDigitalLogo-450px.jpeg',186,215,'{\"thumbnail\": {\"ext\": \".jpeg\", \"url\": \"/uploads/thumbnail_Rock_Digital_Logo_450px_6d502a9166.jpeg\", \"hash\": \"thumbnail_Rock_Digital_Logo_450px_6d502a9166\", \"mime\": \"image/jpeg\", \"name\": \"thumbnail_RockDigitalLogo-450px.jpeg\", \"path\": null, \"size\": 5.57, \"width\": 135, \"height\": 156}}','Rock_Digital_Logo_450px_6d502a9166','.jpeg','image/jpeg',8.18,'/uploads/Rock_Digital_Logo_450px_6d502a9166.jpeg',NULL,'local',NULL,'/','2022-10-06 12:49:54.131000','2022-10-06 12:50:10.522000',1,1),(6,'Drip-ecomm.png','Drip-ecomm.png','Drip-ecomm.png',2878,3053,'{\"large\": {\"ext\": \".png\", \"url\": \"/uploads/large_Drip_ecomm_fc1eae289b.png\", \"hash\": \"large_Drip_ecomm_fc1eae289b\", \"mime\": \"image/png\", \"name\": \"large_Drip-ecomm.png\", \"path\": null, \"size\": 1202.06, \"width\": 943, \"height\": 1000}, \"small\": {\"ext\": \".png\", \"url\": \"/uploads/small_Drip_ecomm_fc1eae289b.png\", \"hash\": \"small_Drip_ecomm_fc1eae289b\", \"mime\": \"image/png\", \"name\": \"small_Drip-ecomm.png\", \"path\": null, \"size\": 334.86, \"width\": 471, \"height\": 500}, \"medium\": {\"ext\": \".png\", \"url\": \"/uploads/medium_Drip_ecomm_fc1eae289b.png\", \"hash\": \"medium_Drip_ecomm_fc1eae289b\", \"mime\": \"image/png\", \"name\": \"medium_Drip-ecomm.png\", \"path\": null, \"size\": 702.65, \"width\": 707, \"height\": 750}, \"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_Drip_ecomm_fc1eae289b.png\", \"hash\": \"thumbnail_Drip_ecomm_fc1eae289b\", \"mime\": \"image/png\", \"name\": \"thumbnail_Drip-ecomm.png\", \"path\": null, \"size\": 43.2, \"width\": 147, \"height\": 156}}','Drip_ecomm_fc1eae289b','.png','image/png',6876.68,'/uploads/Drip_ecomm_fc1eae289b.png',NULL,'local',NULL,'/','2022-10-21 15:07:15.817000','2022-10-21 15:09:20.824000',1,1),(7,'nailsBy.png','nailsBy.png','nailsBy.png',2904,3071,'{\"large\": {\"ext\": \".png\", \"url\": \"/uploads/large_nails_By_d7658fe7f5.png\", \"hash\": \"large_nails_By_d7658fe7f5\", \"mime\": \"image/png\", \"name\": \"large_nailsBy.png\", \"path\": null, \"size\": 1154.54, \"width\": 946, \"height\": 1000}, \"small\": {\"ext\": \".png\", \"url\": \"/uploads/small_nails_By_d7658fe7f5.png\", \"hash\": \"small_nails_By_d7658fe7f5\", \"mime\": \"image/png\", \"name\": \"small_nailsBy.png\", \"path\": null, \"size\": 316.91, \"width\": 473, \"height\": 500}, \"medium\": {\"ext\": \".png\", \"url\": \"/uploads/medium_nails_By_d7658fe7f5.png\", \"hash\": \"medium_nails_By_d7658fe7f5\", \"mime\": \"image/png\", \"name\": \"medium_nailsBy.png\", \"path\": null, \"size\": 673.04, \"width\": 709, \"height\": 750}, \"thumbnail\": {\"ext\": \".png\", \"url\": \"/uploads/thumbnail_nails_By_d7658fe7f5.png\", \"hash\": \"thumbnail_nails_By_d7658fe7f5\", \"mime\": \"image/png\", \"name\": \"thumbnail_nailsBy.png\", \"path\": null, \"size\": 38.79, \"width\": 148, \"height\": 156}}','nails_By_d7658fe7f5','.png','image/png',6446.49,'/uploads/nails_By_d7658fe7f5.png',NULL,'local',NULL,'/','2022-10-21 15:47:48.216000','2022-10-21 15:54:42.487000',1,1);
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files_folder_links`
--

DROP TABLE IF EXISTS `files_folder_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files_folder_links` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `file_id` int unsigned DEFAULT NULL,
  `folder_id` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `files_folder_links_fk` (`file_id`),
  KEY `files_folder_links_inv_fk` (`folder_id`),
  CONSTRAINT `files_folder_links_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE,
  CONSTRAINT `files_folder_links_inv_fk` FOREIGN KEY (`folder_id`) REFERENCES `upload_folders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_folder_links`
--

LOCK TABLES `files_folder_links` WRITE;
/*!40000 ALTER TABLE `files_folder_links` DISABLE KEYS */;
/*!40000 ALTER TABLE `files_folder_links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files_related_morphs`
--

DROP TABLE IF EXISTS `files_related_morphs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files_related_morphs` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `file_id` int unsigned DEFAULT NULL,
  `related_id` int unsigned DEFAULT NULL,
  `related_type` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `order` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `files_related_morphs_fk` (`file_id`),
  CONSTRAINT `files_related_morphs_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_related_morphs`
--

LOCK TABLES `files_related_morphs` WRITE;
/*!40000 ALTER TABLE `files_related_morphs` DISABLE KEYS */;
INSERT INTO `files_related_morphs` VALUES (21,1,5,'api::post.post','Image',1),(22,1,6,'api::post.post','Image',1),(23,1,7,'api::post.post','Image',1),(24,1,8,'api::post.post','Image',1),(25,1,1,'api::post.post','Image',1),(26,1,2,'api::post.post','Image',1),(27,1,3,'api::post.post','Image',1),(28,1,4,'api::post.post','Image',1),(31,1,9,'api::post.post','Image',1),(45,2,1,'api::portfolio-item.portfolio-item','image',1),(46,3,2,'api::portfolio-item.portfolio-item','image',1),(67,1,4,'api::post.post','featured_image',1),(68,5,4,'api::post.post','author_image',1),(69,1,5,'api::post.post','featured_image',1),(70,5,5,'api::post.post','author_image',1),(71,1,6,'api::post.post','featured_image',1),(72,5,6,'api::post.post','author_image',1),(73,1,7,'api::post.post','featured_image',1),(74,5,7,'api::post.post','author_image',1),(75,1,8,'api::post.post','featured_image',1),(76,5,8,'api::post.post','author_image',1),(79,1,1,'api::post.post','featured_image',1),(80,5,1,'api::post.post','author_image',1),(81,1,2,'api::post.post','featured_image',1),(82,5,2,'api::post.post','author_image',1),(95,1,9,'api::post.post','featured_image',1),(96,5,9,'api::post.post','author_image',1),(116,4,3,'api::portfolio-item.portfolio-item','image',1),(117,6,4,'api::portfolio-item.portfolio-item','image',1),(123,7,5,'api::portfolio-item.portfolio-item','image',1),(132,1,3,'api::post.post','featured_image',1),(133,5,3,'api::post.post','author_image',1);
/*!40000 ALTER TABLE `files_related_morphs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-28 12:08:10
