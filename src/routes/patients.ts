/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { NonSensitivePatient } from '../types';
import patientService from '../services/patientServices';
import { Response } from 'express';

const router = express.Router();

router.get('/', (_req, res:Response<NonSensitivePatient[]>) => {
  res.send(patientService.getNonSensitivePatientEntries());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender,occupation } = req.body;
  const addedEntry = patientService.addPatient({
    name, 
    dateOfBirth, 
    ssn, 
    gender,
    occupation
  });
  res.json(addedEntry);
});

export default router;