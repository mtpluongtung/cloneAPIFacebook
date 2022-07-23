import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LeftBar_Componet',
  templateUrl: './LeftBar_Componet.component.html',
  styleUrls: ['./LeftBar_Componet.component.css']
})
export class LeftBar_ComponetComponent implements OnInit {

  constructor() { }
  list:any;
  ngOnInit() {
    this.list=
    [
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},

      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},

      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},

      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},

      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},

      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},

      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},

      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      {url:'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-gai-xinh-cap-2-3-de-thuong.jpg',name:'Ngọc Hà'},
      
    ]
  }

}
