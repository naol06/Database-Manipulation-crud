-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 23, 2023 at 12:46 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `salary` int(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `email`, `password`, `salary`, `address`, `image`) VALUES
(13, 'Naol', 'naolberhanu06@gmail.com', '$2b$10$yr5U1f2zJAlNBr.KJEBILeP6HcwXj9oXal65vtDXCulRfWpCdqyk6', 100000, 'ambo', 'image_1696723268572.jpg'),
(14, 'kena', 'kena@gmail.com', '$2b$10$zjcEzRcHAs6dcB9j0Ng7JOdCDNulYaSmIOi8vK6rskLQZnfiPYmpq', 40000, 'ambo', 'image_1696723325654.png'),
(15, 'bereket', 'bereket@gmail.com', '$2b$10$0R8fWij718T0cFk6kC7L1e0vaQa2bN8XW1WrlrBAD0w1vY6fA/Ak6', 30000, 'ambo', 'image_1696723361695.jpg'),
(17, 'kena', 'kena@gmail.com', '$2b$10$vhn8APspOEQI1gG9.vt3CejWChIgCJL17FkIp9tGAWm4HDTAn5mFG', 400, 'ambo', 'image_1700254571282.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
