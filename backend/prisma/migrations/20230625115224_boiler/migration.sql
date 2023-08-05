-- CreateEnum
CREATE TYPE "permission" AS ENUM ('Admin', 'Viewer', 'Accountant');

-- CreateEnum
CREATE TYPE "invoiceType" AS ENUM ('Purchase', 'Sale');

-- CreateEnum
CREATE TYPE "state" AS ENUM ('JAMMU_AND_KASHMIR_01', 'HIMACHAL_PRADESH_02', 'PUNJAB_03', 'CHANDIGARH_04', 'UTTARAKHAND_05', 'HARYANA_06', 'DELHI_07', 'RAJASTHAN_08', 'UTTAR_PRADESH_09', 'BIHAR_10', 'SIKKIM_11', 'ARUNACHAL_PRADESH_12', 'NAGALAND_13', 'MANIPUR_14', 'MIZORAM_15', 'TRIPURA_16', 'MEGHALAYA_17', 'ASSAM_18', 'WEST_BENGAL_19', 'JHARKHAND_20', 'ODISHA_21', 'CHATTISGARH_22', 'MADHYA_PRADESH_23', 'GUJARAT_24', 'DADRA_AND_NAGAR_HAVELI_26', 'DAMAN_AND_DIU_26', 'MAHARASHTRA_27', 'KARNATAKA_29', 'GOA_30', 'LAKSHADWEEP_31', 'KERALA_32', 'TAMIL_NADU_33', 'PUDUCHERRY_34', 'ANDAMAN_AND_NICOBAR_ISLANDS_35', 'TELANGANA_36', 'ANDHRA_PRADESH_37', 'LADAKH_38', 'OTHER_TERRITORY_97', 'CENTRE_JURISDICTION_99');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255),
    "state" "state" NOT NULL,
    "pincode" VARCHAR(6) NOT NULL,
    "email" TEXT,
    "password" VARCHAR(255) NOT NULL,
    "mobile" VARCHAR(12) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255),
    "state" "state" NOT NULL,
    "pincode" VARCHAR(6) NOT NULL,
    "email" TEXT,
    "mobile" VARCHAR(15),
    "country" TEXT NOT NULL DEFAULT 'India',
    "gstID" VARCHAR(15) DEFAULT 'URP',
    "gstType" VARCHAR(15) NOT NULL DEFAULT 'Regular',

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userPermissions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "permissions" "permission" NOT NULL,

    CONSTRAINT "userPermissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "party" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "gstID" VARCHAR(255) NOT NULL,
    "email" VARCHAR(80),
    "mobile" VARCHAR(12),
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "alias" VARCHAR(255),
    "unitId" INTEGER NOT NULL,
    "hsnId" INTEGER NOT NULL,
    "openingStock" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "openingValue" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "alias" VARCHAR(255),
    "sacId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bankAccount" (
    "id" SERIAL NOT NULL,
    "DisplayName" VARCHAR(255) NOT NULL,
    "BankName" VARCHAR(255) NOT NULL,
    "BankAddress" VARCHAR(255),
    "AccountNumber" VARCHAR(25) NOT NULL,
    "IFSCode" VARCHAR(25),
    "SWIFTCode" VARCHAR(25),
    "Branch" VARCHAR(25),
    "gstID" VARCHAR(15),
    "OpeningBalance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "bankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ledgerGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parentid" INTEGER,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "ledgerGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ledger" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(56) NOT NULL,
    "description" VARCHAR(255),
    "groupId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "gstApplicable" BOOLEAN DEFAULT false,
    "reverseChargeable" BOOLEAN DEFAULT false,
    "hsnId" INTEGER,
    "sacId" INTEGER,

    CONSTRAINT "ledger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "partyId" INTEGER NOT NULL,
    "partyName" VARCHAR(120) NOT NULL,
    "dateInvoice" DATE NOT NULL,
    "dateEntry" DATE,
    "dateDispatch" DATE,
    "entryTime" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transport" TEXT,
    "ewaybill" VARCHAR(255),
    "invoiceNo" VARCHAR(18),
    "narration" VARCHAR(1023),
    "invoiceType" "invoiceType" NOT NULL,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ledgerEntry" (
    "id" SERIAL NOT NULL,
    "invoiceId" INTEGER,
    "ledgerId" INTEGER NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "partyId" INTEGER NOT NULL,

    CONSTRAINT "ledgerEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itemEntry" (
    "id" SERIAL NOT NULL,
    "invoiceId" INTEGER NOT NULL,
    "itemid" INTEGER NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "hsnId" INTEGER NOT NULL,
    "gstrate" DECIMAL(65,30),
    "taxableAmount" DECIMAL(65,30),
    "cgst" DECIMAL(65,30),
    "sgst" DECIMAL(65,30),
    "igst" DECIMAL(65,30),
    "partyId" INTEGER NOT NULL,

    CONSTRAINT "itemEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "serviceEntry" (
    "id" SERIAL NOT NULL,
    "invoiceId" INTEGER,
    "ServiceId" INTEGER NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "sacId" INTEGER NOT NULL,
    "gstrate" DECIMAL(65,30) NOT NULL,
    "cgst" DECIMAL(65,30),
    "taxableAmount" DECIMAL(65,30),
    "sgst" DECIMAL(65,30),
    "igst" DECIMAL(65,30),
    "partyId" INTEGER NOT NULL,

    CONSTRAINT "serviceEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense" (
    "id" SERIAL NOT NULL,
    "invoiceId" INTEGER,
    "ledgerId" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsn" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(4095) NOT NULL,
    "hsncode" VARCHAR(255) NOT NULL,
    "gstrate" DECIMAL(65,30),
    "cess" VARCHAR(4095),

    CONSTRAINT "hsn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sac" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(4095) NOT NULL,
    "saccode" VARCHAR(255) NOT NULL,
    "gstrate" DECIMAL(65,30),

    CONSTRAINT "sac_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "name" VARCHAR(255) NOT NULL
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "alias" VARCHAR(255),
    "email" TEXT NOT NULL,
    "mobile" VARCHAR(15) NOT NULL,
    "partyId" INTEGER,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reciept" (
    "id" SERIAL NOT NULL,
    "bankId" INTEGER,
    "cash" BOOLEAN NOT NULL,
    "partyId" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "reciept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" SERIAL NOT NULL,
    "bankId" INTEGER,
    "cash" BOOLEAN NOT NULL,
    "partyId" INTEGER,
    "ledgerId" INTEGER,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255),
    "phone" TEXT,
    "salary" INTEGER NOT NULL,
    "companyId" INTEGER,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance" (
    "id" SERIAL NOT NULL,
    "staffid" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "present" BOOLEAN NOT NULL,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unit" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "symbol" VARCHAR(255),
    "formalUnitId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formalUnit" (
    "id" SERIAL NOT NULL,
    "formalName" VARCHAR(25) NOT NULL,
    "formalCode" VARCHAR(3) NOT NULL,

    CONSTRAINT "formalUnit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_key" ON "tag"("name");

-- AddForeignKey
ALTER TABLE "userPermissions" ADD CONSTRAINT "userPermissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userPermissions" ADD CONSTRAINT "userPermissions_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "party" ADD CONSTRAINT "party_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_hsnId_fkey" FOREIGN KEY ("hsnId") REFERENCES "hsn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_sacId_fkey" FOREIGN KEY ("sacId") REFERENCES "sac"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bankAccount" ADD CONSTRAINT "bankAccount_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledgerGroup" ADD CONSTRAINT "ledgerGroup_parentid_fkey" FOREIGN KEY ("parentid") REFERENCES "ledgerGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledgerGroup" ADD CONSTRAINT "ledgerGroup_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledger" ADD CONSTRAINT "ledger_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "ledgerGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledger" ADD CONSTRAINT "ledger_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledger" ADD CONSTRAINT "ledger_hsnId_fkey" FOREIGN KEY ("hsnId") REFERENCES "hsn"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledger" ADD CONSTRAINT "ledger_sacId_fkey" FOREIGN KEY ("sacId") REFERENCES "sac"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledgerEntry" ADD CONSTRAINT "ledgerEntry_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledgerEntry" ADD CONSTRAINT "ledgerEntry_ledgerId_fkey" FOREIGN KEY ("ledgerId") REFERENCES "ledger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledgerEntry" ADD CONSTRAINT "ledgerEntry_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemEntry" ADD CONSTRAINT "itemEntry_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemEntry" ADD CONSTRAINT "itemEntry_itemid_fkey" FOREIGN KEY ("itemid") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemEntry" ADD CONSTRAINT "itemEntry_hsnId_fkey" FOREIGN KEY ("hsnId") REFERENCES "hsn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemEntry" ADD CONSTRAINT "itemEntry_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceEntry" ADD CONSTRAINT "serviceEntry_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceEntry" ADD CONSTRAINT "serviceEntry_ServiceId_fkey" FOREIGN KEY ("ServiceId") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceEntry" ADD CONSTRAINT "serviceEntry_sacId_fkey" FOREIGN KEY ("sacId") REFERENCES "sac"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceEntry" ADD CONSTRAINT "serviceEntry_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense" ADD CONSTRAINT "expense_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense" ADD CONSTRAINT "expense_ledgerId_fkey" FOREIGN KEY ("ledgerId") REFERENCES "ledger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reciept" ADD CONSTRAINT "reciept_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "bankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reciept" ADD CONSTRAINT "reciept_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "bankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "party"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_ledgerId_fkey" FOREIGN KEY ("ledgerId") REFERENCES "ledger"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_staffid_fkey" FOREIGN KEY ("staffid") REFERENCES "staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit" ADD CONSTRAINT "unit_formalUnitId_fkey" FOREIGN KEY ("formalUnitId") REFERENCES "formalUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "unit" ADD CONSTRAINT "unit_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
