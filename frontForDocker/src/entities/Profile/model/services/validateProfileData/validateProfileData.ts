import {IProfile} from 'entities/Profile';
import {ValidateProfileData} from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: IProfile) => {
    return []
    // if (!profile) return [ValidateProfileData.NO_DATA];
    //
    // const {
    //     name,
    //     surname,
    //     age,
    //     country,
    // } = profile;
    //
    // const errors: Array<ValidateProfileData> = [];
    //
    // if (!name || !surname) errors.push(ValidateProfileData.INCORRECT_USER_DATA);
    // if (!age || !Number.isInteger(Number(age)) || !(Number(age) > 0)) errors.push(ValidateProfileData.INCORRECT_AGE);
    // if (!country) errors.push(ValidateProfileData.INCORRECT_COUNTRY);
    //
    // return errors;
};
