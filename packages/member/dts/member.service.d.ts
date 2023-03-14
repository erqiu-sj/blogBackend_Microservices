import { ClientRegisterService, Member } from '@blog/bootstrap';
import { Observable } from 'rxjs';
import { int } from '@memo28/types';
export declare class MemberService {
    private clientRegisterService;
    constructor(clientRegisterService: ClientRegisterService);
    createuser(opt: Member): Observable<any>;
    deleteUser(id: int): Observable<any>;
}
