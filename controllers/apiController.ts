import { Router } from "express";
import { userController } from './userController'
import {patientController} from './patientController'
import { praticienController } from "./praticienController";
import { localisationController } from "./localisationController";
import { plagehoraireController } from "./plagehoraireController";
import { planningController } from "./planningController";
import { rdvController } from "./rdvController";
import { banController } from "./banController";
import { congeController } from "./congeController";
import { roleController } from "./roleController";
import {authController} from "./auth.controller"

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const apiController = Router();
const port = process.env.PORT || 5000
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API TOPDOC LEONARD RINGOT',
            description: 'Swagger TopDoc leonard ',
            contact: {
                name: 'Best front-end dev EUW'
            },
            // servers: [{ url: '/api' }]
            servers: [{
                url: `http://localhost:${port}`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./controllers/*.ts`]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)

apiController.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
apiController.use('/users', userController)
apiController.use('/patients', patientController)
apiController.use('/praticiens', praticienController)
apiController.use('/localisations', localisationController)
apiController.use('/plagehoraires', plagehoraireController)
apiController.use('/planning', planningController)
apiController.use('/rdv', rdvController)
apiController.use('/ban', banController)
apiController.use('/conge', congeController)
apiController.use('/role', roleController)
apiController.use('/auth', authController)
export { apiController }