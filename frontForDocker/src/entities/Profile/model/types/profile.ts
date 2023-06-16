import { Currency } from '../../../Currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileData {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export interface IProfile {
    name?: string
    surname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface IProfileSchema {
    data?: IProfile,
    form?: IProfile,
    isLoading: boolean,
    error?: boolean,
    isReadonly: boolean,
    validateErrors?: Array<ValidateProfileData>,
}
