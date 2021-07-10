import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubcategoryComponent} from './subcategory.component';

const routes: Routes = [{path: ':id/:name', component: SubcategoryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoryRoutingModule {}
