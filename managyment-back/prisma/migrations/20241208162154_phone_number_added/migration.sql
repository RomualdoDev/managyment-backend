/*
  Warnings:

  - You are about to drop the column `cellNumber` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "beginDate" DATETIME NOT NULL
);
INSERT INTO "new_Cliente" ("age", "beginDate", "email", "id", "name", "size") SELECT "age", "beginDate", "email", "id", "name", "size" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
