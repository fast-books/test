'use strict'

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//list all companies of the user
exports.list = async function (req, res) {
  try {
    const companies = await prisma.company.findMany();
    res.json(companies);
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
    const companies = await prisma.company.findUnique({
      where: { id: Number(id) },
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// New company
exports.add = async function (req, res) {
  const { name, address, state, pincode, email, mobile, country, gstId, gstType, parties, invoices, staffs, userPermissions, bankAccounts, unit, ledgerGroup, ledger, item, service } = req.body;

  try {
    const newCompany = await prisma.company.create({
      data: {
        name,
        address,
        state,
        pincode,
        email,
        mobile,
        country,
        gstId,
        gstType,
        parties: {
          set: parties // Update the parties for the company
        },
        invoices: {
          set: invoices // Update the invoices for the company
        },
        staffs: {
          set: staffs // Update the staffs for the company
        },
        userPermissions: {
          set: userPermissions // Update the userPermissions for the company
        },
        bankAccounts: {
          set: bankAccounts // Update the bankAccounts for the company
        },
        unit: {
          set: unit // Update the unit for the company
        },
        ledgerGroup: {
          set: ledgerGroup // Update the ledgerGroup for the company
        },
        ledger: {
          set: ledger // Update the ledger for the company
        },
        item: {
          set: item // Update the item for the company
        },
        service: {
          set: service // Update the service for the company
        },
      },
    });

    res.json(newCompany);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Modify a specific company by id
exports.edit = async (req, res) => {
  const { id } = req.params;
  const { name, address, state, pincode, email, mobile, country, gstID, gstType, parties, invoices, staffs, userPermissions, bankAccounts, unit, ledgerGroup, ledger, item, service } = req.body;

  try {
    const updatedCompany = await prisma.company.update({
      where: { id: parseInt(id) },
      data: {
        name,
        address,
        state,
        pincode,
        email,
        mobile,
        country,
        gstID,
        gstType,
        parties: {
          set: parties // Update the parties for the company
        },
        invoices: {
          set: invoices // Update the invoices for the company
        },
        staffs: {
          set: staffs // Update the staffs for the company
        },
        userPermissions: {
          set: userPermissions // Update the userPermissions for the company
        },
        bankAccounts: {
          set: bankAccounts // Update the bankAccounts for the company
        },
        unit: {
          set: unit // Update the unit for the company
        },
        ledgerGroup: {
          set: ledgerGroup // Update the ledgerGroup for the company
        },
        ledger: {
          set: ledger // Update the ledger for the company
        },
        item: {
          set: item // Update the item for the company
        },
        service: {
          set: service // Update the service for the company
        },
      },
    });
    res.json(updatedCompany);
  } catch (error) {
    console.error('Error updating company:', error);
    res.status(500).json({ error: 'Unable to update company' });
  }
};
