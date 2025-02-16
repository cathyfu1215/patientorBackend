import { z } from 'zod';
import { NewPatientSchema } from './utils';

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export enum Gender{
    Female = 'female',
    Male = 'male',
    Other = 'other'
}

interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnosis['code']>;
  }
  
  export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
  }
  
  interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
  }

  interface Discharge {
    date: string;
    criteria: string;
  }

  interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge?: Discharge;
  }

  interface SickLeave {
    startDate: string;
    endDate: string;
  }

  interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: SickLeave;
  }



export type Entry = //create a union type
| HealthCheckEntry
| HospitalEntry
| OccupationalHealthcareEntry;

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Array<Entry>;
}

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = z.infer<typeof NewPatientSchema>; 