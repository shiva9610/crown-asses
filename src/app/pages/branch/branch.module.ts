import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {BranchComponent} from './branch.component';

const routes: Routes = [{path: ':id', component: BranchComponent}];

@NgModule({
  declarations: [BranchComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BranchModule {}