import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { HeaderComponent } from './components/layout/header.component';
import { NavLeftComponent } from './components/layout/nav-left.component';
import { MainDashboardComponent } from './components/dashboard/main.component';
import { ServiceComponent } from './components/dashboard/service.component';
import { EventComponent } from './components/dashboard/event.component';
import { ScheduleComponent } from './components/dashboard/schedule.component';
import { ScheduleItemComponent } from './components/dashboard/schedule/sheduleitem.component';
import { WelcomeComponent } from './components/dashboard/welcome.component';
import { MenuItemComponent } from './components/layout/menu/menuitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLeftComponent,
    MainDashboardComponent,
    ServiceComponent,
    EventComponent,
    ScheduleComponent,
    ScheduleItemComponent,
    WelcomeComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
