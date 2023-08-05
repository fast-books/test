'use strict'

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.list = async function (req, res) {
    try {
        const parties = await prisma.party.findMany();
        res.json(parties);
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
        const party = await prisma.party.findUnique({
            include: { invoices: true, reciept: true, payment: true },
            where: { id: Number(id) },
        });
        res.json(party);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// New party
exports.add = async function (req, res) {
    const { name, address, gstId, invoices, email, mobile, contacts, companyId } = req.body;

    try {
        const newParty = await prisma.party.create({
            data: {
                name,
                address,
                gstId,
                invoices,
                email,
                mobile,
                contacts,
                company: { connect: { id: companyId } },
            },
        });
        res.json(newParty);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Modify a party by id
exports.edit = async (req, res) => {
    const { id } = req.params;
    const { name, address, gstID, email, mobile, contacts, companyId } = req.body;

    try {
        const updatedParty = await prisma.party.update({
            where: { id: parseInt(id) },
            data: {
                name,
                address,
                gstID,
                email,
                mobile,
                contacts: {
                    set: contacts // Update the contacts for the party
                },
                company: { connect: { id: companyId } },
            },
        });
        res.json(updatedParty);
    } catch (error) {
        console.error('Error updating party:', error);
        res.status(500).json({ error: 'Unable to update party' });
    }
};
