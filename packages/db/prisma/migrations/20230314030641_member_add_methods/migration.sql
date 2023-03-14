/*
  Warnings:

  - Added the required column `method` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Member` ADD COLUMN `method` VARCHAR(191) NOT NULL;
