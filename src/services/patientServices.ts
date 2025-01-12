import patientData from '../../data/patients';
import { Patient,NonSensitivePatient,NewPatient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatientEntries = ():Patient[] => {
  return patientData;
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
    ...entry
  };
  return newPatientEntry;
};

export default {
    getPatientEntries,
    addPatient,
    getNonSensitivePatientEntries
};