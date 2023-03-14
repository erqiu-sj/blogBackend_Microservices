import { logsInfoType, logsNameTypes } from '../../config/logs';
import { Observable } from 'rxjs';
import { obj } from '@memo28/types';
export declare class ClientRegisterService {
    private logs;
    private article;
    private member;
    private db;
    private logsName;
    setLogsName(name: logsNameTypes): this;
    triggerLogs(info: logsInfoType): void;
    triggerMember<T = any>(type: string, args: obj): Observable<T>;
    triggerArticle(type: string): Observable<any>;
    triggerDb<T = any>(type: string, args: obj): Observable<T>;
}
