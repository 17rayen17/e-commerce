import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component,OnDestroy,OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Subscription, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , OnDestroy {
  b=false;
  openmenu:boolean = false;
  dataSubscription!: Subscription;
  constructor(private serv : ServiceService){}


  ngOnInit(): void {
    this.getcart();

    this.dataSubscription = interval(500) // Update every 5 seconds, adjust as needed
      .pipe(switchMap(() => this.serv.getcart()))
      .subscribe((res) => {
        this.cart = res;
        console.log(this.cart.length);
      });
  }
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  cart : any[] = []
  getcart(){
    this.serv.getcart().subscribe(res=>{
      this.cart = res;
      console.log(this.cart.length);
    })
  }
}
