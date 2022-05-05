import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  method: string = 'GET';
  methods: string[] = ['GET', 'POST', 'PUT', 'DELETE'];
  url: string = '';
  body: string = '';

  constructor(private rq: RequestService) { }

  ngOnInit(): void {
  }

  sendRequest() {
    this.rq.request(this.method, this.url, this.body, {});
  }

}
