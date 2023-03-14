import { INestMicroservice, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class DbService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestMicroservice): Promise<void>;
}
