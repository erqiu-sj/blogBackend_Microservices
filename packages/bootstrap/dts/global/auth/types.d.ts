import { RolesKeys } from './auth.guard';
export type tokenCarriesInformation = {
    username: string;
    roles: RolesKeys | '';
};
