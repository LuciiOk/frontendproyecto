import { MedicalInfo } from "./medical-info";
import { Pleasures } from "./pleasures";

export interface Users {
    nombre:string,
    email:string,
    password:string,
    nacimiento:string
    sexo:string,
    infoMedica:MedicalInfo,
    gustos:Pleasures
}
