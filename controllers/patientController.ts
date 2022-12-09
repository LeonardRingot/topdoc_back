import { Router } from "express";
import { ValidationError } from "sequelize";
import { User, Patient, Localisation, Role, RoleUser } from "../database/connect";
import { ApiException } from "../types/exception";
import bcrypt from 'bcrypt';
import { patientId, patientTypes } from "../types/patient";

const patientController = Router();

/**
 * @swagger
 * tags:
 *      name: Patient
 *      description: Manage Ratio
 */

/**
  * @openapi
  * /api/patients:
  *  post:
  *      tags: [Patient]
  *      description: Create a Patient
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"patient": {"td_firstname": "leo","td_lastname": "ringot","td_birthday": "2000-06-20"},"users": {"td_password": "string", "td_email": "ringleo@free.fr","td_phone": "2345676","td_isActif": true},"localisation": {"td_address": "address","td_zipCode": 62176,"td_city": "city"}}
  *      responses:
  *        200:
  *          description: Create a new patient.
  */
patientController.post('/', async (req, res) => {
    if (!req.body.users.td_password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })

    req.body.users.td_password = await bcrypt.hash(req.body.users.td_password, 10)
    if (!Number.isInteger(Number (req.body.users.td_phone) )){
        return res.status(400).json({message: "Le numero de telephone doit être un nombre", data: req.body.users.td_phone})
    }

    try {
        User.create(req.body.users).then(async (user: any) => {
            Patient.create(req.body.patient).then((c: any) => {
                c.setUser(user)
            })

            Localisation.create(req.body.localisation).then((local: any) => {
                user.setLocalisation(local)
            })

            const roleRow = await Role.findByPk(2)
            user.addRole(roleRow, { through: RoleUser })

        }).then((patients: any) => {
            const message: string = `Patient créé avec succes.`;
            res.json({ message, data: patients });
        }).catch((error: ApiException) => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = `Echec lors de la création du Patient.`
            res.status(500).json({ message, data: error })
        })
    } catch (error) {
        return res.status(500).json(error)
    }
})

/**
  * @openapi
  * /api/patients/{id}:
  *  delete:
  *      tags: [Patient]
  *      description: Delete a patients
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete a Patient 
  */
patientController.delete('/:id', async (req, res) => {
    Patient.findByPk(req.params.id).then(async (patient: patientId) => {
        if (patient === null) {
            const message = "Le Candidat demandé n'existe pas. Réessayer avec un autre identifiant."
            return res.status(404).json({ message })
        }

        const patientDeleted = patient;
        let local = await User.findByPk(patientDeleted.UserId)

        return User.destroy({
            where: { id: patient.UserId }
        }).then(() => {
            Localisation.destroy({
                where: { id: local.LocalisationId }
            })

            const message = `Le Candidat avec l'identifiant n°${patientDeleted.id} a bien été supprimé.`
            res.json({ message, data: patientDeleted })
        })
    })
        .catch((error: ApiException) => {
            const message = `Le Candidat n'a pas pu être supprimé. Réessayer dans quelques instants.`;
            res.status(500).json({ message, data: error });
        });
})

/**
 * @openapi
 * /api/patients:
 *   get:
 *      tags: [Patient]
 *      responses:
 *        200:
 *          description: Get the list of all candidate.
 */
patientController.get('/', async (req, res) => {
    Patient.findAll({
        include: [
            {
                model: User,
                required: false,
                attributes: {exclude: ['td_password']},
                include: {
                    model: Localisation,
                    require: false
                }
            }
        ]
    })
        .then((patients: patientTypes) => {
            res.status(200).json(patients)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })

})

/**
 * @openapi
 * /api/patients/{id}:
 *   get:
 *      tags: [Patient]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique candidate.
 */
patientController.get('/:id', async (req, res) => {
    Patient.findByPk(req.params.id, {
        include: [
            {
                model: User,
                required: false,
                attributes: {exclude: ['td_password']},
                include: [
                    {
                        model: Localisation,
                        require: false
                    },
                    {
                        model: Role,
                        require: false,
                    }
                ]
            }
        ]
    })
        .then((patients: patientTypes) => {
            res.status(200).json(patients)
        })
        .catch((error: ApiException) => {
            res.status(500).json(error)
        })
})

/**
  * @openapi
  * /api/patients/{id}:
  *  put:
  *      tags: [Patient]
  *      description: Update a Patient
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default: 1
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {    "firstname": "a", "lastname": "a", "birthday": "1999-01-25"}
  *      responses:
  *        200:
  *          description: Update the Patient of given id.
  */
patientController.put('/:id', async (req, res) => {
    Patient.update(req.body, {
        where: { id: req.params.id }
    }).then((patient: any) => {
        if (patient === null) {
            const message = "Requested user does not exist."
            return res.status(404).json({ message })
        }
        const message = `Candidate successfully updated`;
        res.json({ message, data: patient });
    }).catch((error: ApiException) => {
        if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Could not update the candidate.`;
        res.status(500).json({ message, data: error });
    });
})

/**
  * @openapi
  * /api/patients/form/{id}:
  *  put:
  *      tags: [Patient]
  *      description: Crée un patient
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *         default : 1
  *       - name: JSON
  *         in: body
  *         required: true  
  *         type: object
  *         default: {"patient": {"td_firstname": "luc","td_lastname": "fate","td_birthday": "1999-01-01"},"users": {"td_password": "string","td_email": "lucfate@test.com","td_phone": 456789,"td_isActif": true},"localisation": {"td_address": "address","td_zipCode": 62176,"td_city": "city"}}
  *      responses:
  *        200:
  *          description: La requête s'est bien déroulé
  */
patientController.put('/form/:id', async (req, res) => {
    if (!req.body.users.td_password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })

    req.body.users.td_password && (req.body.users.td_password = await bcrypt.hash(req.body.users.td_password, 10))

    if (!Number.isInteger(Number (req.body.users.td_phone) )){
        return res.status(400).json({message: "Le numero de telephone doit être un nombre", data: req.body.users.td_phone})
    }

    try {
        Patient.update(req.body.patient, { where: { id: req.params.id } }).then(() => {
            Patient.findByPk(req.params.id).then((patient: patientTypes) => {
                User.update(req.body.users, { where: { id: patient.UserId } }).then(() => {
                    User.findByPk(patient.UserId).then((user: any) => {

                        Localisation.update(req.body.localisation, {
                            where: { id: user.LocalisationId }
                        })
                    })
                })
            })
        })
        Patient.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    required: false,
                    include: [
                        
                    ]
                }
            ]
        }).then((patients: any) => {
            const message: string = 'Le candidat à bien été mis à jour'
            res.json({ message, data: patients })
        })
            .catch((error: ApiException) => {
                if (error instanceof ValidationError) {
                    return res.status(400).json({ message: error.message, data: error })
                }
                const message = `Le Candidat n'a pas pu être ajouté. Réessayer dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    } catch (error) {
        return res.status(500).json(error)
    }
})

export { patientController }