import { IStateSchema } from 'app/providers/StoreProvider';

export const usernameSelector = ({ loginForm }: IStateSchema) => loginForm?.username || '';
export const passwordSelector = ({ loginForm }: IStateSchema) => loginForm?.password || '';

export const isLoadingSelector = ({ loginForm }: IStateSchema) => loginForm?.isLoading || false;
export const errorSelector = ({ loginForm }: IStateSchema) => loginForm?.error;
