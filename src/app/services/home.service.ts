import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Branch, Category, Data} from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  catalog$ = new BehaviorSubject<Data | null>(null);
  category$ = new BehaviorSubject<Category[] | null>(null);
  branch$ = new BehaviorSubject<Branch | null>(null);

  constructor(private httpClient: HttpClient) {}

  getLocation(): Observable<{message: string; data: Data; error: any}> {
    return this.httpClient
      .get<{message: string; data: Data; error: any}>(
        location.origin + '/assets/api/catalog.json'
      )
      .pipe(
        map(({data, message, error}) => {
          this.catalog$.next(data);
          return {message, data, error};
        })
      );
  }

  updateData(branchId: string): void {
    this.catalog$.subscribe(({locations}) => {
      let currentLocation = locations.filter((location) => {
        return location.branches.some(({branch_id}) => branch_id === branchId);
      });
      const branch = currentLocation?.[0].branches.filter(
        (branch) => branch.branch_id === branchId
      )[0];
      this.branch$.next(branch);
      const category = branch ? branch.categories : [];
      this.category$.next(category);
    });
  }
}
