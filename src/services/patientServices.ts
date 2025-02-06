import patientData from '../../data/patients';
import { Patient,NonSensitivePatient,NewPatient,Entry } from '../types';
import { v1 as uuid } from 'uuid';

const getPatientEntries = (): Patient[] => {
  return patientData.map(({ id, name, dateOfBirth, ssn, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
    entries,
  }));
};

const getNonSensitivePatientEntries = (): NonSensitivePatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatient): Patient => {
  const id = uuid();
  const newPatientEntry: Patient = {
    id: id,
    ...entry,
    entries: [] as Entry[], // Initialize entries as an empty array of type Entry[]
  };

  patientData.push(newPatientEntry); // Add the new patient to the patientData array

  return newPatientEntry;
};

export default {
  getPatientEntries,
  getNonSensitivePatientEntries,
  addPatient,
};