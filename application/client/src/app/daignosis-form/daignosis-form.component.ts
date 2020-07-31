import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/index';
import { DataService } from '../services/data.service';
import { ApiService } from '../services/api.service ';
@Component({
  selector: 'app-daignosis-form',
  templateUrl: './daignosis-form.component.html',
  styleUrls: ['./daignosis-form.component.scss']
})
export class DaignosisFormComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(private router: Router, private authService: AuthService,public dataservice:DataService,private apiService:ApiService) { }

  ngOnInit() {
  }
  submit(){
    this.loading = true;
    this.apiService.body1={
      name : this.model.name,
      age:this.model.gender,
      gender:this.model.date,
      mobile:this.model.mail,
      diagnosis:this.model.tel,
      patientid:this.dataservice.patientid
    }
    this.apiService.acceptdata().subscribe(data => {
      alert("details submitted successfully");
      //this.router.navigate(['/login']);
    }, error => {
      this.loading = false;
      console.log(JSON.stringify(error));
      alert("Enrollment failed: " + error['error']['message']);
    });
  }

}
