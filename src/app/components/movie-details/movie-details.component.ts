import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/class/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movies: Movies[];

  constructor(private movie: MoviesService) {

    this.movies = movie.movie;

  }

  ngOnInit() {
  }

}
