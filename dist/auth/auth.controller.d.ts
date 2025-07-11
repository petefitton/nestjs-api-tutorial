import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        email: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        hash: string;
        firstName: string | null;
        lastName: string | null;
    }>;
    signin(): {
        msg: string;
    };
}
