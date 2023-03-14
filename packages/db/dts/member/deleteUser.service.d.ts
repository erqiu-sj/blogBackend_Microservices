import { int } from '@memo28/types';
import { ClientRegisterService, DbService, ResType } from '@blog/bootstrap';
export declare class DeleteUserService {
    private DbService;
    private clientRegisterService;
    deleteId: int;
    constructor(DbService: DbService, clientRegisterService: ClientRegisterService);
    setDeleteId(id: int): this;
    deleteUserLog(): this;
    deleteUser(): Promise<this>;
    getResult(): ResType;
}
