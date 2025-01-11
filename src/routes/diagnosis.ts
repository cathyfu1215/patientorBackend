import express from 'express';
import diagnosesService from '../services/diagnosisServices';
import { Response } from 'express';
import { Diagnosis } from '../types';

const router = express.Router();

router.get('/', (_req, res:Response<Diagnosis[]>) => {
  res.send(diagnosesService.getDiagnosisEntries());
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnosis!');
});

export default router;