import { IRepository } from "../core/repository.interface";
import { PatientDTO } from "../dto/patient.dto";
import { Patient } from "../models/patient.model";
import { PatientMapper } from "../mapper/patient.mapper";
import { sequelize } from "~~/database/sequelize";
import { User } from "~~/models/users.model";


export class PatientRepository implements IRepository<PatientDTO> {

    async findById(id: number): Promise<PatientDTO | null> {
        return Patient.findByPk(id).then((data:Patient | null) =>{
            return PatientMapper.mapToDto(data)
        })
    }

    async findAll(): Promise<Array<PatientDTO>> {
        return Patient.findAll().then((data:Array<Patient>) =>{
            return data.map((patient:Patient)=>{
                
                return PatientMapper.mapToDto(patient)
            })
        })
    }

    async create(body: Partial<Patient>): Promise<PatientDTO> {
        
        const t = await sequelize.transaction();
    
        try {
            
            const user = await User.create({
               UserId:'11',
                td_lastname:'test',
                td_firstname:'a',
                td_birthday:'2022-05-20',
                td_email: 'a@gmail.com',
                td_password:'e',
                td_phone: '1111',
                td_isActif:'true'
            }, { transaction: t , body});
            const patientUser = await Patient.create({
                td_patient:'test'
            })
           const dto:PatientDTO = await Patient.create({
                td_patient:patientUser.td_patient,
                UserId:user.id
            }, { transaction: t });
            
            console.log('success');
            await t.commit()
            return PatientMapper.mapToDto(patientUser)
            
            } 
        catch(error){
            
                console.log('MON ERREUR ' + error)
                await t.rollback();
                throw(error)
            
        }
       }
       

       async delete(UserId: number): Promise<boolean | number>
       {
          return Patient.destroy({
           where:{
            UserId:UserId
           }
       }).then((data:boolean | number)=>{
           return data
       })
       }
       async update(body: Patient, UserId: number): Promise<boolean | number> {
        return Patient.update(body, 
            { where:
                 { UserId: UserId } 
               
             }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }
}
