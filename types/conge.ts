export interface congeTypes {
    td_debut_conge: Date;
    td_fin_conge: Date;
    PraticienUserId: number;
}
export interface congeId extends congeTypes {
    id: number;
}