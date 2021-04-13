import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './admin/menu/menu.component';
import { MainSectionComponent } from './admin/main-section/main-section.component';
import { FooterComponent } from './admin/footer/footer.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminRoutingModule } from './admin/admin.routing.component'
import { FormsModule }   from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuComponent,
    MainSectionComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdminRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
