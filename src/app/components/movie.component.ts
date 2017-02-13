import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'movie',
	templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit {
	movie: Object;

	constructor(private location: Location,
							private router: ActivatedRoute,
							private movieService: MovieService){
	}

	ngOnInit(): void {
		this.router.params.subscribe( (params) => {
			let id = params['id'];
			this.movieService.getMovie(id).subscribe(res => {
				console.log(res);
				this.movie = res;
			});
		});
	}

	back(){
		this.location.back();
	}
}