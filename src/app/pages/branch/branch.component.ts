import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Branch, Category} from 'src/app/interfaces/category';
import {HomeService} from 'src/app/services/home.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {
  branchId: string | null = null;
  category: Category[] | null = null;
  branch: Branch | null = null;

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.branchId = params.id;
      this.homeService.updateData(this.branchId);
      this.homeService.branch$.subscribe((data) => (this.branch = data));
      this.homeService.category$.subscribe((data) => (this.category = data));
    });
  }
}
