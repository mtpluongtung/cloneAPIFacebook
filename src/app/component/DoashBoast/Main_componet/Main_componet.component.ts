import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Main_componet',
  templateUrl: './Main_componet.component.html',
  styleUrls: ['./Main_componet.component.css']
})
export class Main_componetComponent implements OnInit {

  constructor() { }
  list: any;
  showSoty:boolean=false;
  ngOnInit() {
    this.list=[
      {url_avt:'https://1.bigdata-vn.com/wp-content/uploads/2021/12/Hinh-Nen-Girl-Xinh-Full-HD-Cho-Laptop-Va-May.jpg',url_story:'https://1.bigdata-vn.com/wp-content/uploads/2021/12/1640841264_102_Hinh-Nen-Girl-Xinh-Full-HD-Cho-Laptop-Va-May.jpg',name:'Hạ Thu'},
      {url_avt:'https://1.bigdata-vn.com/wp-content/uploads/2021/12/1640841309_971_Hinh-Nen-Girl-Xinh-Full-HD-Cho-Laptop-Va-May.jpg',url_story:'https://1.bigdata-vn.com/wp-content/uploads/2021/12/1640841311_69_Hinh-Nen-Girl-Xinh-Full-HD-Cho-Laptop-Va-May.jpg',name:'Hằng Phạm'},
      {url_avt:'https://hinhgaixinh.com/wp-content/uploads/2022/03/anh-gai-xinh-hoc-sinh-hoan-hao.jpg',url_story:'https://hinhgaixinh.com/wp-content/uploads/2022/03/anh-gai-xinh-hoc-sinh-tuyet-dep.jpg',name:'Nhung Nhung'},
      {url_avt:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-3.jpg',url_story:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-4.jpg',name:'Hà Vi'},
      // {url_avt:'',url_story:'',name:''},
      // {url_avt:'',url_story:'',name:''},
      // {url_avt:'',url_story:'',name:''},
      // {url_avt:'',url_story:'',name:''},
      // {url_avt:'',url_story:'',name:''},
      // {url_avt:'',url_story:'',name:''},
    ]
  }
  close(){
    this.showSoty=false;
    
  }
  showStory(){
    this.showSoty=true;
    console.log('hahaha')
  }
}
