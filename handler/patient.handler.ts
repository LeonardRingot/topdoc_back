import { Request, Response } from "express";
import { PatientRepository } from "../repository/patient.repository";
import { PatientService } from "../service/patient.service";


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
async function getPatientById(req: Request, res: Response) {
    try {
        const result = await patientService.findById(parseInt(req.params.id));
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

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
async function deletePatient(req:Request, res:Response) {
    const UserId = req.params.id as unknown as number;
    try{
        await patientService.delete(UserId);
      res.status(200).send()

    } catch(err) {
        res.status(500).json(err)
    }
}
async function updatePatient(req:Request, res:Response) {
    const UserId = req.params.UserId as unknown as number;
    try{
        const result = await patientService.update(req.body, UserId)
    }catch(err) {
        res.status(500).json(err)
    }
}

 const handler = {getPatients, getPatientById, createPatient, updatePatient, deletePatient}

export default handler;