import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Branch, Category} from 'src/app/interfaces/category';
import {HomeService} from 'src/app/services/home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  branchId: string | null = null;
  category: Category[] | null = null;
  branch: Branch | null = null;

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.branchId = params['id'];
    });
  }

  ngOnInit(): void {
    this.homeService.updateData(this.branchId);
    this.branch = this.homeService.branch$.getValue();
    this.category = this.homeService.category$.getValue();
  }
}
