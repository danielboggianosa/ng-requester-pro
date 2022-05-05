import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-response',
  templateUrl: './request-response.component.html',
  styleUrls: ['./request-response.component.css']
})
export class RequestResponseComponent implements OnInit {

  response: any;

  constructor(private rq: RequestService) { }

  ngOnInit(): void {
    this.rq.response$.subscribe(response => (this.response = response));
  }
}
