import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
	apiKey: string;
	times: number

	constructor(private jsonp: Jsonp){
		this.apiKey = 'c79f0a4b4f8b9c843e385c5cdb521ae1';
		this.times = 0;

	}

	getPopular(){
		if(this.times === 0){

		} else {
			this.times += 1;
		}
		console.log('getPopular', this.times);
		return this.jsonp.get(`https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=${this.apiKey}&callback=__ng_jsonp__.__req${this.times}.finished`)
			.map(res => res.json());  
	}

	getInTheaters(){
		this.times += 1;
		console.log('getInTheaters', this.times);
		return this.jsonp.get(`https://api.themoviedb.org/3/discover/movie?&primary_release_date.gte=2017-02-01&primary_release_date.lte=2017-02-13&sort_by=popularity.desc&api_key=${this.apiKey}&callback=__ng_jsonp__.__req${this.times}.finished`)
			.map(res => res.json());  	
	}

	getMovie(id: string){
		this.times += 1;
		console.log('getMovie', this.times);
		return this.jsonp.get(`https://api.themoviedb.org/3/movie/${id}?&api_key=${this.apiKey}&callback=__ng_jsonp__.__req${this.times}.finished`)
			.map(res => res.json());
	}
	// getMovie(id: string){
	// 	return this.jsonp.get(`https://api.themoviedb.org/3/movie/${id}?&api_key=${this.apiKey}&callback=JSONP_CALLBACK`)
	// 		.map(res => res.json());
	// }


}