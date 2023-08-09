export interface BankModel {
    id: number;
    DisplayName: string,
    BankName: string,
    BankAddress: string,
    AccountNumber: string,
    IFSCode: string,
    SWIFTCode: string|null,
    Branch: string|null,
    gstID: string|null,
    OpeningBalance:string ,
    companyId: number
}
