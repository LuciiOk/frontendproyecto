import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicalInfo } from 'src/app/interfaces/medical-info';
import { Pleasures } from 'src/app/interfaces/pleasures';
import { Users } from 'src/app/interfaces/users';
import { ConexionService } from 'src/app/service/conexion.service';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  infoPersonal?:Users;
  infoMedica?:MedicalInfo;
  infoGusto?:Pleasures;

  constructor(private userService:UserDataService, private auth:ConexionService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data => {
      this.infoPersonal = data[0];
      if (this.infoPersonal !== undefined) {
        
        let diferencia:number = Math.abs(Date.now() - Date.parse(this.infoPersonal?.fechanacimiento));
        const newLocal = Math.floor((diferencia / (1000 * 3600 * 24)) / 365.25);
        this.infoPersonal.edad = newLocal;
      }
    }, error => {
      console.log(error);
    })

    this.userService.getMedicalInfo().subscribe(data => {
      this.infoMedica = data;
    }, error => {
      console.log(error);
    })

    this.userService.getPleasuresInfo().subscribe((data:any) => {
      this.infoGusto = data;
    })
    
  }


  volver() {
    history.back();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdrop: 'static'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

  eliminarcuenta() {
    this.userService.deleteMedicalInfo().subscribe(data => {
      console.log(data)
    })

    this.userService.deletePleasures().subscribe(data => {
      console.log(data)
    })

    this.userService.deleteUser().subscribe(data => {
      console.log(data);
      this.auth.logout();
    }, error => {
        console.log(error);
    })

  }

}
