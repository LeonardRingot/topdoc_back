import { Router } from "express";
import { ValidationError } from "sequelize";
import { Praticien, Localisation, Role, User } from "../database/connect";
import { praticienId, praticienTypes } from "../types/praticien";
import { ApiException } from "../types/exception";
import bcrypt from 'bcrypt'

const praticienController = Router();

/**
 * @swagger
 * tags:
 *      name: Praticien
 *      description: Manage Praticien
 */

/**
  * @openapi
  * /api/praticiens:
  *  post:
  *      tags: [Praticien]
  *      description: Create an Praticien
  *      consumes:
  *       - application/json
  *      parameters:
  *       - name: JSON
  *         in: body
  *         required: true
  *         type: object
  *         default: {"praticien": {"td_activite": "activite"},"users": {"td_password": "string","td_email": "lucfate@test.com","td_phone": 777777,"td_isActif": true},"localisation": {"td_address": "address","td_zipCode": 62176,"td_city": "city"} }
  *      responses:
  *        200:
  *          description: Create a new praticien.
  */
praticienController.post('/', async (req, res) => {
  if (!req.body.users.td_password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })
  


  req.body.users.td_password = await bcrypt.hash(req.body.users.td_password, 10)

  if (!Number.isInteger(Number (req.body.users.td_phone) )){
    return res.status(400).json({message: "Le numero de telephone doit être un nombre", data: req.body.users.td_phone})
}

  try {
    User.create(req.body.users).then(async (user: any) => {

      Praticien.create(req.body.praticien).then((e: any) => {
        e.setUser(user)
      })

      Localisation.create(req.body.localisation).then((local: any) => {
        user.setLocalisation(local)
      })

      

      // const roleRow = await Role.findByPk(3)
      // user.addRole(roleRow, { through: RoleUser })

    }).then((praticien: praticienTypes) => {
      const message: string = `employeur créé avec succes.`;
      res.json({ message, data: praticien });
    })
      .catch((error: ApiException) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Echec lors de la création de l'employeur.`
        res.status(500).json({ message, data: error })
      })
  } catch (error) {
    return res.json(error)
  }
})

/**
  * @openapi
  * /api/praticiens/{id}:
  *  delete:
  *      tags: [Praticien]
  *      description: Delete an praticien
  *      parameters:
  *       - name: id
  *         in: path
  *         required: true
  *         type: integer
  *      responses:
  *        200:
  *          description: Delete an praticien. 
  */

praticienController.delete('/:id', async (req, res) => {
  Praticien.findByPk(req.params.id).then(async (praticien: praticienId) => {
    if (praticien === null) {
      const message = "L'employeur demandé n'existe pas. Réessayer avec un autre identifiant."
      return res.status(404).json({ message })
    }

    const praticienDeleted = praticien;

    let local = await User.findByPk(praticienDeleted.UserId)
    return User.destroy({
      where: { id: praticien.UserId }
    }).then(() => {
      Localisation.destroy({
        where: { id: local.LocalisationId }
      })
      const message = `L'employeur avec l'identifiant n°${praticienDeleted.id} a bien été supprimé.`
      res.json({ message, data: praticienDeleted })
    })
  })
    .catch((error: ApiException) => {
      const message = `L'employeur n'a pas pu être supprimé. Réessayer dans quelques instants.`;
      res.status(500).json({ message, data: error });
    });

})

/**
* @openapi
* /api/praticiens:
*   get:
*      tags: [Praticien]
*      responses:
*        200:
*          description: Get the list of all praticien.
*/
praticienController.get('/', async (req, res) => {
  Praticien.findAll({
    include: [
      {
        model: User,
        required: false,
        attributes: {exclude: ['praticienDeleted']},
        include: {
          model: Localisation,
          require: false
        }
      }
    ]
  })
    .then((praticiens: praticienTypes) => {
      res.status(200).json(praticiens)
    })
    .catch((error: ApiException) => {
      res.status(500).json(error)
    })
})

/**
 * @openapi
 * /api/praticiens/{id}:
 *   get:
 *      tags: [Praticien]
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get one specifique praticien.
 */
praticienController.get('/:id', async (req, res) => {
  Praticien.findByPk(req.params.id, {
    include: [
      {
        model: User,
        required: false,
        attributes: {exclude: ['praticienDeleted']},
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
    .then((praticiens: praticienTypes) => {
      res.status(200).json(praticiens)
    })
    .catch((error: ApiException) => {
      res.status(500).json(error)
    })
})

/**
  * @openapi
  * /api/praticiens/{id}:
  *  put:
  *      tags: [Praticien]
  *      description: Update an praticien
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
  *         default: {    "siret": "12345676789", "structurename": "name"}
  *      responses:
  *        200:
  *          description: Update the praticien of given id.
  */
praticienController.put('/:id', async (req, res) => {
  Praticien.update(req.body, {
    where: { id: req.params.id }
  }).then((praticien: any) => {
    if (praticien === null) {
      const message = "Le praticien n'existe pas."
      return res.status(404).json({ message })
    }
    const message = `praticien mise à jour`;
    res.json({ message, data: praticien });
  }).catch((error: ApiException) => {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message, data: error })
    }
    const message = `Echec lors de la mise à jour de praticien.`;
    res.status(500).json({ message, data: error });
  });
})

/**
  * @openapi
  * /api/praticiens/form/{id}:
  *  put:
  *      tags: [Praticien]
  *      description: Crée un Praticien
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
  *         default: {"praticien": {"td_activite": "name"},"users": {"td_password": "string","td_email": "lucfate@test.com","td_phone": 45678912,"td_isActif": true},"localisation": {"td_address": "address","td_zipCode": 62176,"td_city": "city"} }
  *      responses:
  *        200:
  *          description: La requête s'est bien déroulé
  */
praticienController.put('/form/:id', async (req, res) => {
  if (!req.body.users.td_password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })
  //if (req.body.users.td_password !== req.body.users.passwordconf) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe doit être identique.' })

  req.body.users.praticienDeleted && (req.body.users.praticienDeleted = await bcrypt.hash(req.body.users.praticienDeleted, 10))

  if (!Number.isInteger(Number (req.body.users.td_phone) )){
    return res.status(400).json({message: "Le numero de telephone doit être un nombre", data: req.body.users.td_phone})
}

  try {
    Praticien.update(req.body.praticien, { where: { id: req.params.id } }).then(() => {
      Praticien.findByPk(req.params.id).then((praticien: praticienTypes) => {
        User.update(req.body.users, { where: { id: praticien.UserId } }).then(() => {
          User.findByPk(praticien.UserId).then((user: any) => {

           

            Localisation.update(req.body.localisation, {
              where: { id: user.LocalisationId }
            })
          })
        })
      })
    })
    Praticien.findByPk(req.params.id, {
      include: [
        {
          model: User,
          required: false,
          include: [
            {
              
            }
          ]
        }
      ]
    }).then((praticien: any) => {
      const message: string = 'L\'employeur à bien été mis à jour'
      res.json({ message, data: praticien })
    })
      .catch((error: ApiException) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `L\'employeur n'a pas pu être ajouté. Réessayer dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  } catch (error) {
    return res.json(error)
  }
})


export { praticienController };