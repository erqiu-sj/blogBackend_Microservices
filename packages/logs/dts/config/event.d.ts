import * as bunyan from 'bunyan';
import { logsNameTypes } from '@blog/bootstrap';
export declare const eventLogs: {
    [key in logsNameTypes]?: bunyan;
};
export declare function getLogs(key: logsNameTypes): bunyan;
export { event, eventKeys, logsName, logsNameTypes } from '@blog/bootstrap';
