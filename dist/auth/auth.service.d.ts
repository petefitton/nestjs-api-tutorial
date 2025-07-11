import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signup(dto: AuthDto): Promise<{
        email: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        hash: string;
        firstName: string | null;
        lastName: string | null;
    }>;
    signin(dto: AuthDto): Promise<{
        email: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        hash: string;
        firstName: string | null;
        lastName: string | null;
    }>;
}
