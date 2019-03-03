import { Injectable } from '@angular/core';
import { Http , URLSearchParams} from "@angular/http";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

 listaVideos : string = "https://www.googleapis.com/youtube/v3/playlistItems";
 private apikey:string = "AIzaSyBbymdxXlXP8jgEcZ5Da95-jmHDRpWR10c";

  constructor(private http: Http) { }



  getListaVideos(){

    let _URLSearchParams = new URLSearchParams;

    _URLSearchParams.set('part','snippet');
    _URLSearchParams.set('maxResults','3');
    _URLSearchParams.set('playlistId','UU0R2UrGYlygOBZgEQ02Cxew');
    _URLSearchParams.set('key',this.apikey);

    return this.http.get(this.listaVideos, {search : _URLSearchParams})
    .map ( resp => {
      console.log(resp.json())

      let videos :any [] = [];

      for (let v of resp.json().items ) {
        let d = v.snippet;
        videos.push(d);
      }

      return videos;
    });

  }

}
