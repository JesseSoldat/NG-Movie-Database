import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
	selector: 'movies',
	templateUrl: './movies.component.html'
})

export class MoviesComponent {
	popularList: Array<Object>;
	theatersList: Array<Object>;
	searchStr: string;
	searchRes: Array<Object>;

	constructor(private movieService: MovieService) {
		this.movieService.getPopular().subscribe(res => {
			// console.log(res)
			this.popularList = res.results;
		});

		this.movieService.getInTheaters().subscribe(res => {
			this.theatersList = res.results;
		});
	}

	searchMovies(): boolean {
		this.movieService.searchMovies(this.searchStr).subscribe(res => {
			this.searchRes = res.results;
		});
		
	}
}