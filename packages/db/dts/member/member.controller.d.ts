import { ResType } from '@blog/bootstrap';
import { int } from '@memo28/types';
import { Member } from '@prisma/client';
import { CreateUserService } from './createUser.service';
import { DeleteUserService } from './deleteUser.service';
import { MemberService } from './member.service';
export declare class MemberController {
    private memberService;
    private CreateUserService;
    private deleteUserService;
    constructor(memberService: MemberService, CreateUserService: CreateUserService, deleteUserService: DeleteUserService);
    createUser(opt: Member): Promise<ResType<unknown>>;
    deleteUser(opt: {
        id: int;
    }): Promise<ResType<unknown>>;
}
