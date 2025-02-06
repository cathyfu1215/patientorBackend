import { NewPatient } from './types';
import * as z from 'zod';
import { Gender,HealthCheckRating } from './types';


// Define schemas for each entry type
const BaseEntrySchema = z.object({
    id: z.string(),
    description: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    specialist: z.string(),
    diagnosisCodes: z.array(z.string()).optional(),
  });
  
  const HealthCheckEntrySchema = BaseEntrySchema.extend({
    type: z.literal("HealthCheck"),
    healthCheckRating: z.nativeEnum(HealthCheckRating),
  });
  
  const HospitalEntrySchema = BaseEntrySchema.extend({
    type: z.literal("Hospital"),
    discharge: z.object({
      date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      }),
      criteria: z.string(),
    }).optional(),
  });
  
  const OccupationalHealthcareEntrySchema = BaseEntrySchema.extend({
    type: z.literal("OccupationalHealthcare"),
    employerName: z.string(),
    sickLeave: z.object({
      startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      }),
      endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
      }),
    }).optional(),
  });
  
  // Create a union schema for Entry
  const EntrySchema = z.union([
    HealthCheckEntrySchema,
    HospitalEntrySchema,
    OccupationalHealthcareEntrySchema,
  ]);
  
  // Define the NewPatientSchema
  export const NewPatientSchema = z.object({
    name: z.string(),
    dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    ssn: z.string(),
    gender: z.nativeEnum(Gender),
    occupation: z.string().nonempty(),
    entries: z.array(EntrySchema), // Validate entries as an array of Entry
  });


export const toNewPatientEntry = (object: unknown): NewPatient => {
    return NewPatientSchema.parse(object);
};