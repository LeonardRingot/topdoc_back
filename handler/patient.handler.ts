import { Request, Response } from "express";
import { PatientRepository } from "../repository/patient.repository";
import { PatientService } from "../service/patient.service";
import bcrypt from 'bcrypt';

const patientService = new PatientService(new PatientRepository);

async function getPatients(req: Request, res: Response) {
    try {
        const result = await patientService.findAll();
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }

}
async function createPatient(req: Request, res: Response) {
    try {
        const result = await patientService.create(req.body);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)
        console.log(result)
    } catch(err) {
        res.status(500).json(err)
    }

}

 const handler = {getPatients, createPatient}

export default handler;