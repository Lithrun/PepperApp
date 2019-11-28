import { PepperService } from './pepper.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class PointsService extends PepperService {
    private points: string = "points"

    public get(): number {
        const points = <any>localStorage.getItem(this.points);
        if (points === null) {
            localStorage.setItem(this.points, "5");
            return 5;
        }
        return points;
    }

    public add(value: number): void {
        let balance:number = <number>this.get();
        console.log(balance);
        balance = +balance + +value;
        localStorage.setItem(this.points, balance.toString());
    }

    public remove(value: number): void {
        let balance = <number>this.get();
        balance -= value;
        if (balance < 0) {
            balance = 0;
        }
        localStorage.setItem(this.points, balance.toString());
    }

    public hasEnoughBalance(value: number): boolean {
        return this.get() >= value;
    }

}