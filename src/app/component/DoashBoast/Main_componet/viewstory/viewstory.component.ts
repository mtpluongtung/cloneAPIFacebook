import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { friendmodel } from 'src/app/component/model/ListStatus';

@Component({
  selector: 'app-viewstory',
  templateUrl: './viewstory.component.html',
  styleUrls: ['./viewstory.component.css']
})
export class ViewstoryComponent implements OnInit {
  @Output() closestr: EventEmitter<any>= new EventEmitter();
  constructor() { }
  list:any;
  friend = new friendmodel;
  currentIndex:number=0;
   
   
  ngOnInit() {
  
    this.list=[
      {name:'Ngọc Huyền',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-6.jpg',index:0},
      {name:'Hằng Nguyễn',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-11.jpg',index:1},
      {name:'Hà Mun',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-12.jpg',index:2},
      {name:'Ngọc Trinh',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-13.jpg',index:3},
      {name:'Khởi My',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-14.jpg',index:4},
      {name:'Miu Lê',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-15.jpg',index:5},
      {name:'Hà Mun',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-29.jpg',index:6},
      {name:'Ngọc Trinh',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-31.jpg',index:7},
      {name:'Khởi My',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-1-1.jpg',index:8},
      {name:'Miu Lê',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-2-1.jpg',index:9},
      {name:'Pháo',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-3-1.jpg',index:10},
      {name:'Hà Hồ',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-5-1.jpg',index:11},
      {name:'Pháo',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-16.jpg',index:12},
      {name:'Ngọc Trinh',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-13.jpg',index:13},
      {name:'Khởi My',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-14.jpg',index:14},
      {name:'Miu Lê',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-15.jpg',index:15},
      {name:'Pháo',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-16.jpg',index:16},
      {name:'Hà Hồ',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-17.jpg',index:17},
      {name:'Văn Mai Hương',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-19.jpg',index:18},
      {name:'Aee Mee',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-23.jpg',index:19},
      {name:'Ngọc Huyền',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-24.jpg',index:20},
      {name:'Hằng Nguyễn',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-26.jpg',index:21},
      {name:'Hà Mun',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-29.jpg',index:22},
      {name:'Ngọc Trinh',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-31.jpg',index:23},
      {name:'Hà Mun',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-29.jpg',index:24},
      {name:'Ngọc Trinh',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-31.jpg',index:25},
      {name:'Khởi My',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-1-1.jpg',index:26},
      {name:'Miu Lê',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-2-1.jpg',index:27},
      {name:'Pháo',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-3-1.jpg',index:28},
      {name:'Hà Hồ',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-5-1.jpg',index:29},
      {name:'Khởi My',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-1-1.jpg',index:30},
      {name:'Miu Lê',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-2-1.jpg',index:31},
      {name:'Pháo',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-3-1.jpg',index:32},
      {name:'Hà Hồ',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-5-1.jpg',index:33},
      {name:'Văn Mai Hương',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-7-1.jpg',index:34},
      {name:'Aee Mee',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-9-1.jpg',index:35},
      {name:'Hằng Nguyễn',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-26.jpg',index:36},
      {name:'Hà Mun',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-29.jpg',index:37},
      {name:'Ngọc Trinh',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-31.jpg',index:38},
      {name:'Khởi My',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-1-1.jpg',index:39},
      {name:'Miu Lê',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-2-1.jpg',index:40},
      {name:'Pháo',url:'https://meliawedding.com.vn/wp-content/uploads/2022/05/gai-xinh-mac-do-thieu-vai-3-1.jpg',index:41},
      
    ]
    if(this.friend.name=='' || this.friend.url==''){
      this.friend.name=this.list[0].name;
      this.friend.url=this.list[0].url;
      console.log('hahah',this.list[0].url)
    }
  }
  showStory(i:any){
    this.friend.name=i.name;
    this.friend.url=i.url;
    this.currentIndex=i.index;
  }
  next()
    {
        this.currentIndex=this.currentIndex+1;
        if(this.currentIndex==this.list.length){
          this.currentIndex=1;
        }
       
      console.log(this.currentIndex)
      this.friend.name=this.list[this.currentIndex].name;
      this.friend.url=this.list[this.currentIndex].url;
      this.settime();
    }
  prevew(){
    this.currentIndex=this.currentIndex-1;
    if(this.currentIndex < 0){
      this.currentIndex=this.list.length-1;
    }
   
    console.log(this.currentIndex)
    this.friend.name=this.list[this.currentIndex].name;
    this.friend.url=this.list[this.currentIndex].url;
    
    }
    settime(){
      let time= document.querySelector('.time');
       time?.classList.add('timeout');
      
    }
    close(){
      this.closestr.emit();
      console.log('vao day')
    }
  
}
