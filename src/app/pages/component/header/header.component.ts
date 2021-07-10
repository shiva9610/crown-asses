import {Component, OnInit} from '@angular/core';
import {HomeService} from 'src/app/services/home.service';
import {Location} from '../../../interfaces/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  locations: Location[] | [] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.homeService
      .getLocation()
      .toPromise()
      .then(({data}) => {
        this.locations = data.locations;
      })
      .catch(console.error);
  }
}
