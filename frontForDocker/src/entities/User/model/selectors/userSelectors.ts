import { IStateSchema } from 'app/providers/StoreProvider';

export const userAuthDataSelector = ({ user }: IStateSchema) => user.authData;

export const isUserDataReadySelector = ({ user }: IStateSchema) => user.isReady;
