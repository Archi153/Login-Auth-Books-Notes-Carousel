import { Component} from '@angular/core';
import { SlideInterface } from 'src/app/interfaces/slide.interface';


@Component({

  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})

export class PageOneComponent {
  slides: SlideInterface[] = [
    { url: 'https://img.freepik.com/free-photo/above-view-books-arrangement_23-2148882757.jpg?w=996&t=st=1673284582~exp=1673285182~hmac=6df4014842b0d75f5a1870a63faf2292f71b944c935f1a9b6860df2cc8d8fabf', title: 'beach'},
    { url: 'https://img.freepik.com/free-photo/top-view-books-arrangement_23-2148882754.jpg?w=996&t=st=1673284608~exp=1673285208~hmac=dd27a3e5fe35438f4fcc5a060093c0780b930bdf6b07c5b8d3d1d3727edc44c5', title: 'boat'},
    { url: 'https://img.freepik.com/premium-photo/stack-of-books-and-glasses-in-library_23-2147711446.jpg?size=626&ext=jpg&ga=GA1.2.1636890266.1673284573&semt=sph', title: 'forest'},
  ];
}