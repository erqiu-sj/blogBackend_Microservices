import { Member } from '@blog/bootstrap';
import { MemberService } from './member.service';
import { int } from '@memo28/types';
export declare class MemberController {
    private memberService;
    constructor(memberService: MemberService);
    createUser(opt: Member): import("rxjs").Observable<any>;
    deleteUser(opt: {
        id: int;
    }): import("rxjs").Observable<any>;
}
