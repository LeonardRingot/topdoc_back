export interface planningTypes {
    td_planning_name:string;
    td_date_debut: Date;
    td_date_fin: Date; 
}
export interface planningId extends planningTypes {
    id: number;
}