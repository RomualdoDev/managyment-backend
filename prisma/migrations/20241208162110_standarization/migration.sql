/*
  Warnings:

  - You are about to drop the column `altura` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `idade` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `age` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beginDate` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cellNumber` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "cellNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "beginDate" DATETIME NOT NULL
);
INSERT INTO "new_Cliente" ("email", "id") SELECT "email", "id" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
