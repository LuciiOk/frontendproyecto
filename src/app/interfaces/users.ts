import { MedicalInfo } from "./medical-info";
import { Pleasures } from "./pleasures";

export interface Users {
    nombre:string,
    email:string,
    edad?:number | 0;
    password?:string,
    fechanacimiento:string,
    genero:string,
    infoMedica:MedicalInfo,
    gustos:Pleasures
}
