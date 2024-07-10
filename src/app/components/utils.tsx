import moment from 'moment';

export function ageFromDateOfBirthday(dateOfBirth: Date): number {
    return moment().diff(dateOfBirth, 'years');
}