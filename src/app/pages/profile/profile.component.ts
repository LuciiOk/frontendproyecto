import { Component, OnInit } from '@angular/core';
import { MedicalInfo } from 'src/app/interfaces/medical-info';
import { Pleasures } from 'src/app/interfaces/pleasures';
import { Users } from 'src/app/interfaces/users';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  infoPersonal?:Users;
  infoMedica?:MedicalInfo;
  infoGusto?:Pleasures;

  constructor(private userService:UserDataService) { }

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

}
