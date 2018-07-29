import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // importé pour faire un formulaire
@Component({
  selector: 'cc-job-add-form',
  templateUrl: './job-add-form.component.html',
  styleUrls: ['./job-add-form.component.css']
})
export class JobAddFormComponent implements OnInit {

  form: FormGroup; //variable form de type FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //construction du modêle du formulaire
    this.form = this.formBuilder.group({
      id: -1,
      title : '',
      company: '',
      city:'',
      zipcode:35,
      description:'',
      contract:'',
      currency:'euro',
      startdate:'',
      area:'',
      field:'',
      publishdate: new Date(),
      lastupdate: new Date()
    })
  }
  createJob(){
   console.log(this.form.value); 
  }

}
