import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../_services/comentarios.service';
@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.scss']
})
/*"emitDecoratorMetadata": true, Se aumenta en 
tsconfig.json para ue funcione el CommentsTableComponent
*/
export class CommentsTableComponent implements OnInit {
  comment=[
    {
      name_user:"",
      lname_user:"",
      coments_user:"",
      points_obtained:10,
      time_comment:""
    }
  ]
  constructor(
    private ComentariosService:ComentariosService
  ) { }

  ngOnInit(): void {
    this.ComentariosService.getComments().subscribe((data)=>{
      this.comment=data;
    })
  }

}
