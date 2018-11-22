import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  products:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }
  @Input() productData = { name:'', age: '', nation: '' };

  ngOnInit() {
      this.getdatas();

  }
  getdatas() {
    this.products = [];
    this.rest.getdata().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }
  adddata() {
    this.rest.adddata(this.productData.name,this.productData.age).subscribe((result) => {
      this.getdatas();
    }, (err) => {
      console.log(err);
    });
  }

}
