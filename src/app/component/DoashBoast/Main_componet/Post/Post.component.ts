import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Post',
  templateUrl: './Post.component.html',
  styleUrls: ['./Post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  test(){
   var formAction= document.querySelector('.post_from');
   var formAction1= document.querySelector('.post_active');
   formAction?.classList.add('show');
   formAction1?.classList.add('show1');
}
close(){
  var formAction= document.querySelector('.post_from');
  var formAction1= document.querySelector('.post_active');
  formAction?.classList.remove('show');
  formAction1?.classList.remove('show1');
}
}
