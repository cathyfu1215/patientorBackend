import { NewPatient } from './types';
import * as z from 'zod';
import { Gender } from './types';




export const NewPatientSchema = z.object({
    name: z.string(),
    dateOfBirth: z.string().date(),
    ssn: z.string(),
    gender:z.nativeEnum(Gender),
    occupation: z.string().nonempty(),
    //entries contains an array of entry objects, but we don't need to validate them here
    
    entries: z.array(z.object({}))
});


export const toNewPatientEntry = (object: unknown): NewPatient => {
    return NewPatientSchema.parse(object);
};