import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuardGuard } from './helpers/auth-guard.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './pages/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModalModule,
    NgbModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
