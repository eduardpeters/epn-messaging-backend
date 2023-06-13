export interface User {
    username: string;
    socketID: string;
}

export interface RegisterBody {
    username: string;
    password: string;
    confirmPassword: string;
}

export interface LoginBody {
    username: string;
    password: string;
}