import { ClientRegisterService, DbService, Member, ResType } from '@blog/bootstrap';
export declare class CreateUserService {
    private DbService;
    private clientRegisterService;
    private userOpt;
    constructor(DbService: DbService, clientRegisterService: ClientRegisterService);
    setUserOpt(userOpt: Member): this;
    createUserLog(): this;
    createUser(): Promise<this>;
    getResult(): ResType;
}
