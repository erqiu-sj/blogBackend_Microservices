import { ClientsModuleOptions } from '@nestjs/microservices';
import { StdSerializers } from 'bunyan';
export declare const logsClientName = "logs_service";
export declare const LogEventPattern = "LogEventPattern";
export declare const logsClientOpts: ClientsModuleOptions[number];
export declare const event: {
    readonly fatal: "fatal";
    readonly error: "error";
    readonly warn: "warn";
    readonly info: "info";
    readonly debug: "debug";
    readonly trace: "trace";
};
export type eventKeys = keyof typeof event;
export declare const logsName: readonly ["member", "article", "main", "db"];
export type logsNameTypes = (typeof logsName)[number];
export interface logsInfoType {
    name: logsNameTypes;
    level: eventKeys;
    obj?: StdSerializers;
    message?: any;
}
