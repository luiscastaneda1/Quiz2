import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/class/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movies[];

  constructor(private movie: MoviesService) {

    this.movies = movie.movie;

  }

  ngOnInit() {
  }

}
