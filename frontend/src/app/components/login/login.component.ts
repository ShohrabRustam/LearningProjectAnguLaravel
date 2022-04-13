import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public form = {
    email: null,
    password: null
  }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    // console.log(data);
    return this.http.post('url', this.form).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: () => {
        console.log("Error");
        alert("Error Occur!!");
      }
    });
  }

}
