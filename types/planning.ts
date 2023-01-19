export interface planningTypes {
    td_planning_name:string;
    td_startDate: Date;
    td_endDate: Date; 
    planningId:number;
}
export interface planningId extends planningTypes {
    id: number;
}