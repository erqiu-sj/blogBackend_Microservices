import { ClientRegisterService, DbService, Member } from '@blog/bootstrap';
export declare class CreateUser {
    private DbService;
    private clientRegisterService;
    private userOpt;
    constructor(DbService: DbService, clientRegisterService: ClientRegisterService);
    setUserOpt(userOpt: Member): this;
    createUserLog(): this;
    createUser(): Promise<this>;
    getResult(): boolean;
}
