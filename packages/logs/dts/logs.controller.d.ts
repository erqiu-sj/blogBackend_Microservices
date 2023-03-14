import { LogsService } from './logs.service';
import { logsInfoType } from './config/types';
export declare class LogsController {
    private logsService;
    constructor(logsService: LogsService);
    logs(opt: logsInfoType): boolean | void;
}
