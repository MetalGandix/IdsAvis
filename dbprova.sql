-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 02, 2020 alle 11:18
-- Versione del server: 10.4.8-MariaDB
-- Versione PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbprova`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `analisi_sangue`
--

CREATE TABLE `analisi_sangue` (
  `id` bigint(20) NOT NULL,
  `annotazione` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `ematocrito` varchar(255) DEFAULT NULL,
  `emoglobina` varchar(255) DEFAULT NULL,
  `globuli_bianchi` varchar(255) DEFAULT NULL,
  `globuli_rossi` varchar(255) DEFAULT NULL,
  `mch` varchar(255) DEFAULT NULL,
  `mchc` varchar(255) DEFAULT NULL,
  `mcv` varchar(255) DEFAULT NULL,
  `paziente` varchar(255) DEFAULT NULL,
  `piastrine` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `analisi_sangue`
--

INSERT INTO `analisi_sangue` (`id`, `annotazione`, `email`, `ematocrito`, `emoglobina`, `globuli_bianchi`, `globuli_rossi`, `mch`, `mchc`, `mcv`, `paziente`, `piastrine`) VALUES
(1, 'globuli rossi', 'leonardo.mogianesi@studenti.unicam.it', '41.6', '13.3', '9.56', '5.02', '26', '32', '82.9', 'leonardo mogianesi', '340'),
(2, 'piastrine elevate', 'lorenzo.brancaleoni@studenti.unicam.it', '40.9', '13', '8.5', '5', '24', '31', '83', 'lorenzo brancaleoni', '341'),
(3, 'globuli rossi bassi', 'brian.bernardini@studenti.unicam.it', '41', '13', '9.50', '5', '25', '30', '81', 'brian bernardini', '338'),
(4, NULL, 'andrea.polini@unicam.it', '41', '13', '9', '5.2', '26', '32', '82.9', 'professor. Polini', '340');

-- --------------------------------------------------------

--
-- Struttura della tabella `donazione`
--

CREATE TABLE `donazione` (
  `id` bigint(20) NOT NULL,
  `data` varchar(255) DEFAULT NULL,
  `ora` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `donazione`
--

INSERT INTO `donazione` (`id`, `data`, `ora`) VALUES
(130, '06/02/2020', '11:00'),
(131, '06/02/2020', '12:00'),
(132, '07/02/2020', '09:00'),
(134, '07/02/2020', '10:00'),
(135, '07/02/2020', '16:00'),
(136, '07/02/2020', '17:00');

-- --------------------------------------------------------

--
-- Struttura della tabella `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(142);

-- --------------------------------------------------------

--
-- Struttura della tabella `prenotazione_form`
--

CREATE TABLE `prenotazione_form` (
  `id` bigint(20) NOT NULL,
  `centro` varchar(255) DEFAULT NULL,
  `compleanno` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `statosalute` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `prenotazione_form`
--

INSERT INTO `prenotazione_form` (`id`, `centro`, `compleanno`, `note`, `statosalute`, `telefono`) VALUES
(137, 'Avis Macerata', '06/02/2020', NULL, 'no', '3409815506'),
(138, 'Avis Macerata', '07/02/2020', NULL, 'si', '3663568122'),
(139, 'Avis Comunale di Fermo', '07/02/2020', 'mi piace ingegneria del software', 'no', '3409815423'),
(140, 'Avis Comunale di Fermo', '07/02/2020', NULL, 'no', '3409815566');

-- --------------------------------------------------------

--
-- Struttura della tabella `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `role`
--

INSERT INTO `role` (`id`, `description`, `name`) VALUES
(1, 'utente', 'UTENTE'),
(2, 'dottore', 'DOTTORE'),
(3, 'avis', 'AVIS');

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `emergenza` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `stato` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `user`
--

INSERT INTO `user` (`id`, `email`, `emergenza`, `lastname`, `name`, `password`, `stato`, `username`) VALUES
(1, 'dottore@dottore.it', 'NO', 'dottore', 'dottore', '$2a$10$gYW6q7zGW7EI0ZNcGjUbheirua/PiersHuaV5fotKWclxsKqQ3OGG', 'Ascoli Piceno', 'dottore'),
(2, 'avis@avis.com', 'NO', 'avis', 'avis', '$2a$10$okIrddlehDC8okrI/UC9suGtbHDARYr0XwbeVBZcPrr9D2q8CEo/6', 'Ancona', 'avis'),
(3, 'leonardo.mogianesi@studenti.unicam.it', 'SI', 'mogianesi', 'leonardo', '$2a$10$l6MIdiQFVgkB0MYAVsuDluQAjc.coptqteVzKDr8i8EEjmYVLRRTW', 'Macerata', 'leonardo'),
(4, 'lorenzo.brancaleoni@studenti.unicam.it', 'SI', 'brancaleoni', 'lorenzo', '$2a$10$A9QhnIDEaWeuK7QRgDRMAOXlY7e1CQYrHzDc..j3WFnmfzWiruOT.', 'Macerata', 'lorenzo'),
(5, 'brian.bernardini@studenti.unicam.it', 'SI', 'bernardini', 'brian', '$2a$10$4pMyTFe0ZHQERBiwLqc8eemEgzh2YC8CvzOkt43ViuzkdBdghIiYe', 'Fermo', 'brian'),
(7, 'andrea.polini@unicam.it', 'SI', 'Polini', 'Andrea', '$2a$10$2PUpa6us9osiRIJeqJhZc.EFiIkXBeOCy0UDJ5M7nXxVkj0wiwjyK', 'Macerata', 'professore'),
(9, 'dottore@dottore.it', 'NO', 'dottore2', 'dottore2', '$2a$10$NKFQ0V82PnO1mfuU37EgpuRRZYm6Zs4doBP8amz/io9fiDOFFfn.C', 'Fermo', 'secondodottore'),
(10, 'leonardo.mogianesi@studenti.unicam.it', 'NO', 'Lattanzi', 'Nicola', '$2a$10$2nukxQklxKb9x8H.mKZc0.olJRgYmS3eu98hmA4HRAsvrCro53WCC', 'Macerata', 'nicola');

-- --------------------------------------------------------

--
-- Struttura della tabella `user_roles`
--

CREATE TABLE `user_roles` (
  `role_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `user_roles`
--

INSERT INTO `user_roles` (`role_id`, `user_id`) VALUES
(2, 1),
(3, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 7),
(2, 9),
(1, 10);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `analisi_sangue`
--
ALTER TABLE `analisi_sangue`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `donazione`
--
ALTER TABLE `donazione`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `prenotazione_form`
--
ALTER TABLE `prenotazione_form`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKrhfovtciq1l558cw6udg0h0d3` (`role_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKrhfovtciq1l558cw6udg0h0d3` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
