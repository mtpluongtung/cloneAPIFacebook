import { LeftBar_ComponetComponent } from './component/LeftBar_Componet/LeftBar_Componet.component';
import { Main_componetComponent } from './component/DoashBoast/Main_componet/Main_componet.component';
import { Right_BarComponent } from './component/DoashBoast/Right_Bar/Right_Bar.component';
import { DoashBoastComponent } from './component/DoashBoast/DoashBoast.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './component/DoashBoast/Main_componet/Post/Post.component';
import { StatusComponent } from './component/DoashBoast/Main_componet/Status/Status.component';
import { ViewstoryComponent } from './component/DoashBoast/Main_componet/viewstory/viewstory.component';

@NgModule({
  declarations: [
    AppComponent,
    DoashBoastComponent,
    Right_BarComponent,
    Main_componetComponent,
    LeftBar_ComponetComponent,
    PostComponent,
    StatusComponent,
    ViewstoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
