import { Component } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
// import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight';
import { TooltipModule } from './directives/tooltip';
import { HttpClient } from '@angular/common/http';
import { exhaustMap, of, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone:true,
  // imports:[
  //   RouterModule,
  //   HighlightDirective,
  //   TooltipModule
  // ]
})
export class AppComponent {
  title = 'AngularPro';
  loading = false;
  apiCall = new Subject<void>()
constructor(private http:HttpClient){
  this.apiCall.pipe(
    tap(()=>{ this.loading = true }),
    exhaustMap(() =>
      this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
        tap(() => (this.loading = false))
      )
    )
  ).subscribe(res =>{
    console.log(res)
  })
  this.blockingCallStack(10)
}

blockingCallStack(min:number){
  console.log("i'm gonna busy now for"+min+'sec')
  const end = Date.now()+min*1000
  console.log(min*1000)
  while(Date.now() < end){
    // busy call stack
  }
  console.log('call stack free now')
}


  onAPICalls(){
    this.apiCall.next()
  }

 
}
