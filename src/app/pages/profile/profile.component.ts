import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  infoMedica = {};

  constructor(private userService:UserDataService) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data => {
      console.log(data)
    })

    this.userService.getMedicalInfo().subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

}
