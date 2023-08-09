const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.list = async function (req, res) {
  try {
    const banks = await prisma.bankAccount.findMany();
    res.json(banks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.one = async function (req, res) {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const bank = await prisma.bankAccount.findUnique({
      where: { id: Number(id) },
    });
    res.json(bank);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// New bank
exports.add = async function (req, res) {
  const { DisplayName, BankName, BankAddress, AccountNumber, IFSCode, SWIFTCode, Branch, gstID, OpeningBalance, companyId } = req.body;
  console.log(DisplayName, BankName, BankAddress, AccountNumber, IFSCode, SWIFTCode, Branch, gstID, OpeningBalance, companyId);
  try {
    const newBank = await prisma.bankAccount.create({
      data: {
        DisplayName,
        BankName,
        BankAddress,
        AccountNumber,
        IFSCode,
        SWIFTCode,
        Branch,
        gstID,
        OpeningBalance,
        Company: { connect: { id: companyId } },
      },
    });
    res.json(newBank);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Modify a bank by id
exports.edit = async (req, res) => {
  const { id } = req.params;
  const { DisplayName,
    BankName,    
     BankAddress,
  AccountNumber,
    IFSCode,
   SWIFTCode ,      
   Branch ,
   gstID,
   OpeningBalance,
    companyId } = req.body;
  console.log(id, DisplayName,
    BankName,    
     BankAddress,
  AccountNumber,
    IFSCode,
   SWIFTCode ,      
   Branch ,
   gstID,
   OpeningBalance,
    companyId);
  try {
    const updatedBank = await prisma.bankAccount.update({
      where: { id: parseInt(id) },
      data: {
        DisplayName,
        BankName,    
         BankAddress,
      AccountNumber,
        IFSCode,
       SWIFTCode ,      
       Branch ,
       gstID,
       OpeningBalance,
        Company : { connect: { id:companyId } },
      },
    });
    res.json(updatedBank);
  } catch (error) {
    console.error('Error updating bank:', error);
    res.status(500).json({ error: 'Unable to update bank' });
  }
};


exports.delete = async function (req, res) {
  const { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const bank = await prisma.bankAccount.delete({
      where: { id: Number(id) },
    });
    res.json(bank);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
