export interface userRow {
    id: string;
    name: string,
    address: string,
    state: string,
    pincode: string,
    email: string,
    password: string,
    mobile: string,
    userpermisison: string,
}


export interface GenericResponse {
    status: string;
    message: string;
}

export interface ILoginResponse {
    status: string;
    access_token: string;
}

export interface IUserResponse {
    status: string;
    data: {
        user: userRow;
    };
}