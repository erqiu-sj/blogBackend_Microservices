import { ClientRegisterService, Member } from '@blog/bootstrap';
import { int } from '@memo28/types';
export declare class MemberService {
    private clientRegisterService;
    constructor(clientRegisterService: ClientRegisterService);
    createUser(opt: Member): import("rxjs").Observable<any>;
    deleteUser(id: int): import("rxjs").Observable<any>;
}
