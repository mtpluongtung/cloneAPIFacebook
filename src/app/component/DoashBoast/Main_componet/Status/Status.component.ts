import { Component, OnInit } from '@angular/core';
import { stautus } from 'src/app/component/model/ListStatus';

@Component({
  selector: 'app-Status',
  templateUrl: './Status.component.html',
  styleUrls: ['./Status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }
  list :any=[];
  ngOnInit() {
    this.list=
    [
      {image:"https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-co-gai-de-thuong_025058983.jpg",url_avt:"https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-co-gai-dep_025059051.png",Name:"Trần Ngọc Mai",count_like:"Sơn Tùng và 2,5tr người khác",count_coment:"500k bình luận",status:"Anh yêu vội thế",time:"1 giờ"},
      {image:"https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-dep-con-gai_025059089.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_2_32301_700.jpg",Name:"Nguyễn Quỳnh Trang",count_like:"Lương Đức Tùng và 1,1tr người khác",count_coment:"200k bình luận",status:"Chúc ngon miệng",time:"2 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_3_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_5_32301_700.jpg",Name:"Hà Huyền",count_like:"Lương Đức Tùng và 2,1tr người khác",count_coment:"300k bình luận",status:"Chào buổi sáng",time:"1 phút"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_7_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_7_32301_700.jpg",Name:"Ngọc Milu",count_like:"Lương Đức Tùng và 3,5tr người khác",count_coment:"30k bình luận",status:"Helo mọi người",time:"7 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_9_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_9_32301_700.jpg",Name:"Linh kity",count_like:"Lương Đức Tùng và 450k người khác",count_coment:"30k bình luận",status:"Định mời anh ăn tối...",time:"12 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_22_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_22_32301_700.jpg",Name:"Lan Anh",count_like:"Lương Đức Tùng và 50k người khác",count_coment:"10k bình luận",status:"Chúc mừng năm mới",time:"11 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_27_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_27_32301_700.jpg",Name:"Hằng Mun",count_like:"Lương Đức Tùng và 5,1tr người khác",count_coment:"150k bình luận",status:"không cần caption",time:"10 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_40_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_40_32301_700.jpg",Name:"Thảo Nguyễn",count_like:"Lương Đức Tùng và 5,1tr người khác",count_coment:"150k bình luận",status:"Định mời anh ăn tối",time:"11 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_43_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_43_32301_700.jpg",Name:"Nhung Lê",count_like:"Lương Đức Tùng và 4,1tr người khác",count_coment:"150k bình luận",status:"Hi :))",time:"12 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_50_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_50_32301_700.jpg",Name:"Hạnh Nguyễn",count_like:"Lương Đức Tùng và 4,1tr người khác",count_coment:"150k bình luận",status:"Không cảm xúc",time:"1 giờ"},
      {image:"https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-co-gai-de-thuong_025058983.jpg",url_avt:"https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-co-gai-dep_025059051.png",Name:"Trần Ngọc Mai",count_like:"Sơn Tùng và 2,5tr người khác",count_coment:"500k bình luận",status:"Anh yêu vội thế",time:"1 giờ"},
      {image:"https://img2.thuthuatphanmem.vn/uploads/2019/01/04/anh-dep-con-gai_025059089.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_2_32301_700.jpg",Name:"Nguyễn Quỳnh Trang",count_like:"Lương Đức Tùng và 1,1tr người khác",count_coment:"200k bình luận",status:"Chúc ngon miệng",time:"2 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_3_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_5_32301_700.jpg",Name:"Hà Huyền",count_like:"Lương Đức Tùng và 2,1tr người khác",count_coment:"300k bình luận",status:"Chào buổi sáng",time:"1 phút"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_7_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_7_32301_700.jpg",Name:"Ngọc Milu",count_like:"Lương Đức Tùng và 3,5tr người khác",count_coment:"30k bình luận",status:"Helo mọi người",time:"7 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_9_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_9_32301_700.jpg",Name:"Linh kity",count_like:"Lương Đức Tùng và 450k người khác",count_coment:"30k bình luận",status:"Định mời anh ăn tối...",time:"12 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_22_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_22_32301_700.jpg",Name:"Lan Anh",count_like:"Lương Đức Tùng và 50k người khác",count_coment:"10k bình luận",status:"Chúc mừng năm mới",time:"11 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_27_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_27_32301_700.jpg",Name:"Hằng Mun",count_like:"Lương Đức Tùng và 5,1tr người khác",count_coment:"150k bình luận",status:"không cần caption",time:"10 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_40_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_40_32301_700.jpg",Name:"Thảo Nguyễn",count_like:"Lương Đức Tùng và 5,1tr người khác",count_coment:"150k bình luận",status:"Định mời anh ăn tối",time:"11 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_43_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_43_32301_700.jpg",Name:"Nhung Lê",count_like:"Lương Đức Tùng và 4,1tr người khác",count_coment:"150k bình luận",status:"Hi :))",time:"12 giờ"},
      {image:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_50_32301_700.jpg",url_avt:"https://loanthehongnhan.vn/nhung-hinh-gai-dep/imager_50_32301_700.jpg",Name:"Hạnh Nguyễn",count_like:"Lương Đức Tùng và 4,1tr người khác",count_coment:"150k bình luận",status:"Không cảm xúc",time:"1 giờ"},
    ]
  }

}
