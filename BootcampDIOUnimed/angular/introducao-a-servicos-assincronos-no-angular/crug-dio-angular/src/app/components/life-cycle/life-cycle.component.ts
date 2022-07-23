import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy{
  @Input() number = 10
  constructor() {
    console.log('chamou o construtor')
   }

  ngOnChanges(): void {
    console.log('Chamou o onchanges')  
   }
   ngDoCheck(): void {
     console.log('Chamou o docheck')
   }
   ngAfterContentInit(): void {
     console.log("chamou o aftercontentinit")
   }
   ngAfterContentChecked(): void {
     console.log('chamou o aftertconentchecked')
   }
   ngAfterViewChecked(): void {
     console.log('chamou o afterviewchecked')
   }
   ngOnDestroy(): void {
     console.log('chamou o ondestroy')
   }
  ngOnInit(): void {
    console.log('chamou o oninit')
  }
  
}
