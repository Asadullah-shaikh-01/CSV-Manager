-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "csv_files" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "columnHeaders" TEXT[],
    "rowCount" INTEGER NOT NULL,

    CONSTRAINT "csv_files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "csv_rows" (
    "id" TEXT NOT NULL,
    "csvFileId" TEXT NOT NULL,
    "rowData" JSONB NOT NULL,
    "rowIndex" INTEGER NOT NULL,

    CONSTRAINT "csv_rows_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "csv_files" ADD CONSTRAINT "csv_files_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "csv_rows" ADD CONSTRAINT "csv_rows_csvFileId_fkey" FOREIGN KEY ("csvFileId") REFERENCES "csv_files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
