import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ads } from '../model/ads';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ads: ads[] | undefined;
  
  searchForm = new FormGroup({
    search : new FormControl(),
  });
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.getAllCompany()
  }


  onSubmit(){

    let key =this.searchForm.value
    // console.log(key)
    this.userService.getAds(key.search).subscribe((res)=>{
       this.ads=res;
       this.searchForm.reset();

    })
  }

  getAllCompany(){
    this.userService.getAll().subscribe((res)=>{
      this.ads=res
    })
  }
}
