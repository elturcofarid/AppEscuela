import { Component, OnInit }  from "@angular/core";
import { BodyService, DatosVideo, Momento } from '../../servicios/body/body.service';
import { YoutubeService } from '../../servicios/youtube/youtube.service';



declare var $:any;

@Component ({
  selector : 'app-body',
  templateUrl : './body.component.html',
  styleUrls: ['./body.component.css']
})



export class BodyComponent implements OnInit {

  info:DatosVideo[] = [];

  momentos:Momento[] = [];

  videos: any[] = [];

  videoSel: any;

   embedLink = null;

   constructor( public _bodyService:BodyService, private _youtube: YoutubeService ){

     this._youtube.getListaVideos().subscribe( videos => {
       this.videos = videos;
     });

   }

ngOnInit() {

 //console.log("Llamando los datos "  + this._bodyService.getInformacion());
  this.info = this._bodyService.getInformacion();
  this.momentos = this._bodyService.getMomentos();

   this.embedLink = 'https://www.youtube.com/embed/eNkAq6TvlDI';
}


  verVideo(video:any){
    this.videoSel = video;
    $('#myModal').modal();
  }

  cerrarModal(){
    this.videoSel = null;
    $('#myModal').modal('hide');
  }

}
