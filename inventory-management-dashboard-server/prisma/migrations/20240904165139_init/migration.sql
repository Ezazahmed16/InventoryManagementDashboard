/*
  Warnings:

  - You are about to drop the column `ratting` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "ratting",
ADD COLUMN     "rating" DOUBLE PRECISION;
