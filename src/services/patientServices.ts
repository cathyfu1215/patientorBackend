import patientData from '../../data/patients';
import { Patient,NonSensitivePatient,NewPatient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatientEntries = ():Patient[] => {
  return patientData.map(({id,name,dateOfBirth,ssn,gender,occupation,entries})=>({
    name,
    ssn,
    occupation,
    dateOfBirth,
    gender,
    entries,
    id}));
    
};

const getNonSensitivePatientEntries = ():NonSensitivePatient[]=>{
  return patientData.map(({id,name,dateOfBirth,gender,occupation})=>({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

   
const addPatient = (entry:NewPatient):Patient => {
  const id = uuid();
  const newPatientEntry = {
    id: id,
    entries: [],
    ...entry
  };
  return newPatientEntry;
};

export default {
    getPatientEntries,
    addPatient,
    getNonSensitivePatientEntries
};