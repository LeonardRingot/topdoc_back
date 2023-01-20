export interface planningTypes {
    planning_name:string;
    startDate: Date;
    endDate: Date; 
    planningId:number;
}
export interface planningId extends planningTypes {
    id: number;
}