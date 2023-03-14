import { AuthService, ClientRegisterService } from '@blog/bootstrap';
import { Observable } from 'rxjs';
export declare class MainController {
    private clientRegisterService;
    private authService;
    constructor(clientRegisterService: ClientRegisterService, authService: AuthService);
    add(): Observable<any>;
}
