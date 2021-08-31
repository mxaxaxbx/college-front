export interface UsersI {
    _id: string;
    name: string;
    email: string;
    password: string;
    role_id: string;
    subjects?: string[];
}
