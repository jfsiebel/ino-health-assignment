-- CreateTable
CREATE TABLE "exams" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "date_testing" DATE NOT NULL,
    "date_birthdate" DATE NOT NULL,
    "gender" INTEGER NOT NULL,
    "ethnicity" INTEGER NOT NULL,
    "creatine" DECIMAL(6,2) NOT NULL,
    "creatine_unit" TEXT NOT NULL,
    "chloride" DECIMAL(6,2) NOT NULL,
    "chloride_unit" TEXT NOT NULL,
    "fasting_glucose" DECIMAL(6,2) NOT NULL,
    "fasting_glucose_unit" TEXT NOT NULL,
    "potassium" DECIMAL(6,2) NOT NULL,
    "potassium_unit" TEXT NOT NULL,
    "sodium" DECIMAL(6,2) NOT NULL,
    "sodium_unit" TEXT NOT NULL,
    "total_calcium" DECIMAL(6,2) NOT NULL,
    "total_calcium_unit" TEXT NOT NULL,
    "total_protein" DECIMAL(6,2) NOT NULL,
    "total_protein_unit" TEXT NOT NULL,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "exams_client_id_idx" ON "exams"("client_id");
