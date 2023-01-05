export interface localisationTypes {
  td_address: string;
  td_zipCode: number;
  td_city: string
}
  export interface localisationId extends localisationTypes {
    id: number;
}