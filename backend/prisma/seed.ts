import { PrismaClient } from '@prisma/client';
import tags from './data_apis/tag';
import formalunit from './data_apis/formalunit';
import user from './data_apis/user';
import unit from './data_apis/unit';
import company from './data_apis/company';
import userpermissions from './data_apis/userpermission';
import party from './data_apis/party';
import item from './data_apis/item';
import hsn from './data_apis/hsn';
import bankAccount from './data_apis/bankaccount';
import ledgerGroup from './data_apis/ledgerGroup';
import sac from './data_apis/sac';
import ledger from './data_apis/ledger';
import service from './data_apis/service';
import invoice from './data_apis/invoice';
const prisma = new PrismaClient();
async function main() {
  const seedtags = await prisma.tag.createMany({ data: tags })
  const seeduser = await prisma.user.createMany({ data: user })
  const seedcomp = await prisma.company.createMany({ data: company })
  const seeduserpermission = await prisma.userPermissions.createMany({ data: userpermissions })
  const seedformalunit = await prisma.formalUnit.createMany({ data: formalunit })
  const seedunit = await prisma.unit.createMany({ data: unit })
  const seedparty = await prisma.party.createMany({ data: party })
  const seedhsn = await prisma.hsn.createMany({ data: hsn })
  const seeditem = await prisma.item.createMany({ data: item })
  const seedbank = await prisma.bankAccount.createMany({ data: bankAccount })
  const seedLedgerGroup = await prisma.ledgerGroup.createMany({ data: ledgerGroup })
  const seedsac = await prisma.sac.createMany({ data: sac })
  const seedservice = await prisma.service.createMany({ data: service })
  const seedledger = await prisma.ledger.createMany({ data: ledger })
  await prisma.invoice.create({ data: invoice[0] });
  await prisma.invoice.create({ data: invoice[1] });
  await prisma.invoice.create({ data: invoice[2] });
  await prisma.invoice.create({ data: invoice[3] });
  await prisma.invoice.create({ data: invoice[4] });
  await prisma.invoice.create({ data: invoice[5] });
  await prisma.invoice.create({ data: invoice[6] });
  await prisma.invoice.create({ data: invoice[7] });
}
main();