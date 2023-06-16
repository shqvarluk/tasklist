import { IProfile } from '../types/profile';

interface IProfileCardFields {
    type: 'input' | 'number',
    placeholder: string,
    name: keyof IProfile,
    label: string,
}

export type TProfileCardFields = Array<IProfileCardFields>
export type TOptionalReadonlyProfileFields = Record<'username' | 'age' | 'city' | 'currency' | 'country', string>
