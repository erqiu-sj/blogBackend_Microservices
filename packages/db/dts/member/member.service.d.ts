import { ClientRegisterService, DbService } from '@blog/bootstrap';
import { Member } from '@prisma/client';
import { int } from '@memo28/types';
export declare class MemberService {
    private DbService;
    private clientRegisterService;
    constructor(DbService: DbService, clientRegisterService: ClientRegisterService);
    deleteUser(id: int): Promise<Member>;
}
