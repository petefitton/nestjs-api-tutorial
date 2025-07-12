type UserResponse = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    hash: undefined;
    firstName: string | null;
    lastName: string | null;
};
export declare class UserController {
    getMe(expUser: Express.User): UserResponse;
}
export {};
