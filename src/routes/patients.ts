
import express, { NextFunction } from 'express';
import { NewPatient, NonSensitivePatient, Patient } from '../types';
import patientService from '../services/patientServices';
import { Request, Response } from 'express';
import { NewPatientSchema } from '../utils';

const router = express.Router();

router.get('/', (_req, res:Response<NonSensitivePatient[]>) => {
  res.send(patientService.getNonSensitivePatientEntries());
});

router.get('/:id', (req: Request<{ id: string }>, res: Response<Patient | undefined>) => {
  const patient = patientService.getPatientEntries().find(p => p.id === req.params.id);
  if (patient) {
    res.send(patient);
  };
});



const newPatientParser = (req:Request, _res:Response, next:NextFunction)=>{
  try{
    NewPatientSchema.parse(req.body);
    next();
  }
  catch(error:unknown){
    next(error);
  }
};


router.post('/', newPatientParser, (req:Request<unknown,unknown,NewPatient>, res:Response<Patient>) => {
  const addedPatient = patientService.addPatient(req.body);
  res.json(addedPatient);
  
});

export default router;