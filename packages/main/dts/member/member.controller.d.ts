import { MemberService } from './member.service';
import { Member } from '@blog/bootstrap';
export declare class MemberController {
    private memberService;
    constructor(memberService: MemberService);
    createUser(body: Member): import("rxjs").Observable<any>;
    deleteUser(body: {
        id: string;
    }): import("rxjs").Observable<any>;
}
