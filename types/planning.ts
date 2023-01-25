export interface planningTypes {
    planning_name:string;
    startDate: Date;
    rdvDuration: number

    validDuration: number
    planningId:number;
}
export interface planningId extends planningTypes {
    id: number;
}