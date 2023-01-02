import { userTypes } from "~~/types/utilisateur";

export const users: userTypes[] = [
  {
    UserId:1,
    td_lastname:'ringot',
    td_firstname:'leonard',
    td_birthday: new Date("2000-06-21"),
    td_email: "cunmock@gmail.com",
    td_phone: 782361188,
    td_isActif: true,
    td_password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    LocalisationId: 1
  },
  {
    UserId:2,
    td_lastname:'ringot',
    td_firstname:'arthur',
    td_birthday: new Date("2000-06-22"),
    td_email: "hhii@gmail.com",
    td_phone: 782361186,
    td_isActif: true,
    td_password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    LocalisationId: 2
  },
  {
    UserId:3,
    td_lastname:'DOC&',
    td_firstname:'JESUISDOC1',
    td_birthday: new Date("2000-06-23"),
    td_email: "docteur@gmail.com",
    td_phone: 782361185,
    td_isActif: true,
    td_password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    LocalisationId: 3
  },
  {
    UserId:4,
    td_lastname:'DOC2',
    td_firstname:'JESUISDOC2',
    td_birthday: new Date("2000-06-24"),
    td_email: "docteur2@gmail.com",
    td_phone: 782361154,
    td_isActif: true,
    td_password: "$2b$10$NUOQNvbDfEO8EnvvRmI8oOhBjNPyARSE3H2Bya73s7U7wd7vkZGYm",
    LocalisationId: 4
  }
  
  
 
];