/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileSize` to the `csv_files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mimeType` to the `csv_files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `csv_files` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `csv_rows` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "csv_files" ADD COLUMN     "description" TEXT,
ADD COLUMN     "fileSize" INTEGER NOT NULL,
ADD COLUMN     "isArchived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastAccessed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "mimeType" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "csv_rows" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isValid" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "csv_files_userId_idx" ON "csv_files"("userId");

-- CreateIndex
CREATE INDEX "csv_files_fileName_idx" ON "csv_files"("fileName");

-- CreateIndex
CREATE INDEX "csv_rows_csvFileId_idx" ON "csv_rows"("csvFileId");

-- CreateIndex
CREATE INDEX "csv_rows_rowIndex_idx" ON "csv_rows"("rowIndex");
