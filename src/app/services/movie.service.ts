import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
	apiKey: string;

	constructor(private _jsonp: Jsonp){
		this.apiKey = 'c79f0a4b4f8b9c843e385c5cdb521ae1';
	}

	getPopular(){
		return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=c79f0a4b4f8b9c843e385c5cdb521ae1&callback=__ng_jsonp__.__req0.finished')
			.map(res => res.json());  																
	}
	// 	getPopular(){
	// 	return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=c79f0a4b4f8b9c843e385c5cdb521ae1&callback=JSONP_CALLBACK')
	// 		.map(res => res.json());  																
	// }


}