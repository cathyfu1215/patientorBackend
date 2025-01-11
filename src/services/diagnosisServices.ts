import diagnosisData from '../../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnosisEntries = ():Diagnosis[] => {
  return diagnosisData;
};

const addDiagnosis = () => {
  return null;
};

export default {
    getDiagnosisEntries,
    addDiagnosis
};