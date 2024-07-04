-- CreateEnum
CREATE TYPE "status" AS ENUM ('DRAFT', 'PUBLISHED');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "status" "status" NOT NULL DEFAULT 'DRAFT';
