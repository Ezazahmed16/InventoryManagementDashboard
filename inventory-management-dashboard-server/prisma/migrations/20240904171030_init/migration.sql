/*
  Warnings:

  - You are about to drop the column `totalExpense` on the `ExpenseSummary` table. All the data in the column will be lost.
  - You are about to drop the `Expense` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `expenseSummaryId` on table `ExpenseByCategory` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `totalExpenses` to the `ExpenseSummary` table without a default value. This is not possible if the table is not empty.
  - Made the column `productId` on table `Purchases` required. This step will fail if there are existing NULL values in that column.
  - Made the column `productId` on table `Sales` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ExpenseByCategory" DROP CONSTRAINT "ExpenseByCategory_expenseSummaryId_fkey";

-- DropForeignKey
ALTER TABLE "Purchases" DROP CONSTRAINT "Purchases_productId_fkey";

-- DropForeignKey
ALTER TABLE "Sales" DROP CONSTRAINT "Sales_productId_fkey";

-- AlterTable
ALTER TABLE "ExpenseByCategory" ALTER COLUMN "expenseSummaryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ExpenseSummary" DROP COLUMN "totalExpense",
ADD COLUMN     "totalExpenses" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseSummary" ALTER COLUMN "changePercentage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Purchases" ALTER COLUMN "productId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Sales" ALTER COLUMN "productId" SET NOT NULL;

-- AlterTable
ALTER TABLE "SalesSummary" ALTER COLUMN "changePercentage" DROP NOT NULL;

-- DropTable
DROP TABLE "Expense";

-- CreateTable
CREATE TABLE "Expenses" (
    "expenseId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("expenseId")
);

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseByCategory" ADD CONSTRAINT "ExpenseByCategory_expenseSummaryId_fkey" FOREIGN KEY ("expenseSummaryId") REFERENCES "ExpenseSummary"("expenseSummaryId") ON DELETE RESTRICT ON UPDATE CASCADE;
