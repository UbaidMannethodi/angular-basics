import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  private intervalSubscription!: Subscription;
  constructor() { }

  ngOnInit(): void {

    // **** commonly used observable method
    // this.intervalSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })


    // ******* Creating observable function from scratch
    const customObservable = Observable.create((observer: any) => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);

        // *****Completion Handling
        if (count == 2) {
          observer.complete();
        }

        //******Error Handling
        if (count > 3) {
          observer.error(new Error('Counter is greater than three'));
        }

        count++;
      }, 1000);
    });


    this.intervalSubscription = customObservable.subscribe((data: number) => {
      console.log(data);

    }, (error: any) => {
      console.log(error)
    },
      () => {
        console.log('completed');

      }

    )    

  }

  //*******/ For stop subscription
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
