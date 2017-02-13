import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
	apiKey: string;

	constructor(private jsonp: Jsonp){
		this.apiKey = 'c79f0a4b4f8b9c843e385c5cdb521ae1';
	}

	getPopular(){
		return this.jsonp.get(`https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=${this.apiKey}&callback=__ng_jsonp__.__req0.finished`)
			.map(res => res.json());  																
	}

	getInTheaters(){
		return this.jsonp.get(`https://api.themoviedb.org/3/discover/movie?&primary_release_date.gte=2017-02-01&primary_release_date.lte=2017-02-13&sort_by=popularity.desc&api_key=${this.apiKey}&callback=__ng_jsonp__.__req1.finished`)
			.map(res => res.json());  	
	}

	getMovie(id: string){
		return this.jsonp.get(`https://api.themoviedb.org/3/movie/${id}?&api_key=${this.apiKey}&callback=__ng_jsonp__.__req2.finished`)
			.map(res => res.json());
	}


}