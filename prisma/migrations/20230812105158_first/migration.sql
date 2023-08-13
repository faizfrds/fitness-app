-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "class" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);
