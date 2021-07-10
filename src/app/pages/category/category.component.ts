import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Branch, Category, Subcategory} from 'src/app/interfaces/category';
import {HomeService} from 'src/app/services/home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryName: string | null = null;
  branchId: string | null = null;
  subCategory: Subcategory[] | null = null;
  category: Category | null = null;
  branch: Branch | null = null;

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryName = params.name;
      this.branchId = params.id;
    });
  }

  ngOnInit(): void {
    this.homeService.category$.subscribe((categories) => {
      if (categories && categories.length > 0) {
        this.category = categories.filter((category) => {
          return category.name === this.categoryName;
        })[0];
        this.subCategory = this.category.subcategories;
      } else {
        this.homeService.updateData(this.branchId);
      }
    });
    this.branch = this.homeService.branch$.getValue();
  }
}
