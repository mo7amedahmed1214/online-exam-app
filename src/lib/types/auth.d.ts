
declare type UserApp = {
    _id: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    role: string,
    isVerified: boolean,
}

declare type LoginResponse = {
    token: string,
    user: UserApp,
}

// reset
declare type ResetResponse = {
    token: string,
}

// forget 
declare type ForgetResponse={
info:string
}