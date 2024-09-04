/*
  Warnings:

  - You are about to drop the column `expenseSummeryId` on the `ExpenseByCategory` table. All the data in the column will be lost.
  - The primary key for the `ExpenseSummery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `expenseSummeryId` on the `ExpenseSummery` table. All the data in the column will be lost.
  - Added the required column `expenseSummaryId` to the `ExpenseSummery` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExpenseByCategory" DROP CONSTRAINT "ExpenseByCategory_expenseSummeryId_fkey";

-- AlterTable
ALTER TABLE "ExpenseByCategory" DROP COLUMN "expenseSummeryId",
ADD COLUMN     "expenseSummaryId" TEXT;

-- AlterTable
ALTER TABLE "ExpenseSummery" DROP CONSTRAINT "ExpenseSummery_pkey",
DROP COLUMN "expenseSummeryId",
ADD COLUMN     "expenseSummaryId" TEXT NOT NULL,
ADD CONSTRAINT "ExpenseSummery_pkey" PRIMARY KEY ("expenseSummaryId");

-- AddForeignKey
ALTER TABLE "ExpenseByCategory" ADD CONSTRAINT "ExpenseByCategory_expenseSummaryId_fkey" FOREIGN KEY ("expenseSummaryId") REFERENCES "ExpenseSummery"("expenseSummaryId") ON DELETE SET NULL ON UPDATE CASCADE;
