/*
  Warnings:

  - You are about to drop the column `partyName` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `partyId` on the `itemEntry` table. All the data in the column will be lost.
  - You are about to drop the column `partyId` on the `ledgerEntry` table. All the data in the column will be lost.
  - You are about to drop the column `partyId` on the `serviceEntry` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "itemEntry" DROP CONSTRAINT "itemEntry_partyId_fkey";

-- DropForeignKey
ALTER TABLE "ledgerEntry" DROP CONSTRAINT "ledgerEntry_partyId_fkey";

-- DropForeignKey
ALTER TABLE "serviceEntry" DROP CONSTRAINT "serviceEntry_partyId_fkey";

-- AlterTable
ALTER TABLE "invoice" DROP COLUMN "partyName";

-- AlterTable
ALTER TABLE "itemEntry" DROP COLUMN "partyId";

-- AlterTable
ALTER TABLE "ledgerEntry" DROP COLUMN "partyId";

-- AlterTable
ALTER TABLE "serviceEntry" DROP COLUMN "partyId";
