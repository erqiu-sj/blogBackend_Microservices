import { obj, str } from '@memo28/types';
import { JwtService } from '@nestjs/jwt';
import { tokenCarriesInformation } from './types';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    sign(payload: tokenCarriesInformation): string;
    verify<T extends obj>(token: str): tokenCarriesInformation & T;
}
