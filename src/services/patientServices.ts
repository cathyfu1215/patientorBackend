import patientData from '../../data/patients';
import { Patient,NonSensitivePatient } from '../types';

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

   
const addPatient = () => {
  return null;
};

export default {
    getPatientEntries,
    addPatient,
    getNonSensitivePatientEntries
};