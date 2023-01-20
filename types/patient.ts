export interface patientTypes {
  PatientId: number;
   LocalisationId: number;
   numbervitalCode: string;
   UserId: number;
}
export interface patientId extends patientTypes {
 id: number;
}