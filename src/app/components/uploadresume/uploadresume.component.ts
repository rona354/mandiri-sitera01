import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { RestconsumerService } from 'src/app/services/restconsumer.service'
import { HttpClient } from "@angular/common/http";


const uriserver = '';

@Component({
  selector: 'app-uploadresume',
  templateUrl: './uploadresume.component.html',
  styleUrls: ['./uploadresume.component.css']
})
export class UploadresumeComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public dataJobs:any =[];
  uploader: FileUploader = new FileUploader({ url: uriserver });
  attachmentList: any = [];
  validatorAlert: boolean = false;

  public jobTitleItems = [
    { display: 'Java Developer', value: 1 },
    { display: 'Bussines Analyst', value: 2 },
    { display: 'IT Support', value: 3 },
    { display: 'Data Engineer', value: 4 },
    { display: 'Fullstack developer', value: 5 },
  ];
  constructor(private fb: FormBuilder, private httpClient: HttpClient, private _restclient: RestconsumerService) {

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    }

  }

  createForm() {
    this.angForm = this.fb.group(
      {
        identifier: ['', Validators.required],
        mobilenumber: ['', Validators.required],
        usermail: ['', Validators.required],
        jobposition: ['', Validators.required],
        fileupload: ['', Validators.required],
      }
    );
  }

  onClickSubmit() {
    // alert('Your Email is : ' + JSON.stringify(this.angForm.value));
    let payload = this.angForm.value;
    this.submitted = true;
    if (this.angForm.invalid) {
      // bikin alert jika ada yang belum terisi
      this.validatorAlert = true
      setTimeout(() => {
        this.validatorAlert = false
      }, 5000);
      // 
    } else {
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(payload));
    }
  }

  ngOnInit() {
    this.createForm();
    this._restclient.getOpportunitiesAll()
    .subscribe((response: { Data }) => {
      this.dataJobs=response.Data
      this.jobTitleItems=this.dataJobs
      console.log(JSON.stringify(this.dataJobs));
    }, error => {
      console.error(error);
    })
  }

  get f() { return this.angForm.controls; }
  
}
