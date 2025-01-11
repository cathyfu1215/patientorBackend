import express from 'express';
import { NonSensitivePatient } from '../types';
import patientService from '../services/patientServices';
import { Response } from 'express';

const router = express.Router();

router.get('/', (_req, res:Response<NonSensitivePatient[]>) => {
  res.send(patientService.getNonSensitivePatientEntries());
});

router.post('/', (_req, res) => {
  res.send('Saving a patients!');
});

export default router;