import { userTypes } from "~~/types/utilisateur";

export const users: userTypes[] = [
  {
    lastname:'MrClient',
    firstname:'PatientMalade',
    birthday: new Date("2000-06-21"),
    email: "cunmock@gmail.com",
    phone: 782361188,
    isActif: true,
    password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    LocalisationId: 1
  },
  {
    
    lastname:'MrClient',
    firstname:'MrPasBien',
    birthday: new Date("2000-06-22"),
    email: "hhii@gmail.com",
    phone: 782361186,
    isActif: true,
    password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    LocalisationId: 2
  },
  {
   
    lastname:'Dupres',
    firstname:'LeDocteur',
    birthday: new Date("2000-06-23"),
    email: "docteur@gmail.com",
    phone: 782361185,
    isActif: true,
    password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    LocalisationId: 3
  }
];