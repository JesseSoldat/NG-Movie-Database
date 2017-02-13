import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
	selector: 'movies',
	templateUrl: './movies.component.html'
})

export class MoviesComponent {

	constructor(private movieService: MovieService) {
		this.movieService.getPopular().subscribe(res => {
			console.log(res)
		})
	}
}