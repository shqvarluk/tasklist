import { IStateSchema } from 'app/providers/StoreProvider';

export const profileDataSelector = ({ profile }: IStateSchema) => profile?.data;
export const profileFormSelector = ({ profile }: IStateSchema) => profile?.form;
export const profileErrorSelector = ({ profile }: IStateSchema) => profile?.error;
export const isProfileLoadingSelector = ({ profile }: IStateSchema) => profile?.isLoading || false;
export const isReadonlyProfileSelector = ({ profile }: IStateSchema) => profile?.isReadonly || false;
export const profileErrorsSelector = ({ profile }: IStateSchema) => profile?.validateErrors;
