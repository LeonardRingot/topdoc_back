import { Request, Response } from "express";
import { PatientRepository } from "../repository/patient.repository";
import { PatientService } from "../service/patient.service";

const patientService = new PatientService(new PatientRepository);

async function getPatients(req: Request, res: Response) {
    try {
        const result = await patientService.findById(1);
        if (result === null) return res.status(404).send()
        res.status(200).json(result)

    } catch(err) {
        res.status(500).json(err)
    }

}

const handler = {getPatients}

export default handler;