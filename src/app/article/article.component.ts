import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(private serv : ServiceService) { }


  ngOnInit(): void {
  }
  i=1;
  mnus(){
    if(this.i <= 1){
      this.i = 1;
    }else{
      this.i--
    }
  }

  addToCart(x : number){
    const data = {
      fois : x,
      total : 125 * x,
      nameart:"Fall Limited Edition Sneakers"
    }
    this.serv.addcart(data).subscribe(res =>{

    },err=>{
      console.error(err);
    })

  }
}
