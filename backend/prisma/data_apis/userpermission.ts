import { permission } from "@prisma/client";

const userpermissions=[
  {
    id: 1,
    userId:1,
    companyId:1,
    permissions: permission.Admin 
  },
  {
    id: 2,
    userId:2,
    companyId:2,
    permissions: permission.Admin 

  },
  {
    id: 3,
    userId:1,
    companyId:2,
    permissions: permission.Accountant 

  }
]
export default userpermissions;