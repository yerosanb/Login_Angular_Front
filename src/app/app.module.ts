import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageService, NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
 import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
 import { HttpClientInterceptor } from './utils_/interceptors/http-client-interceptor';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { QuillModule } from 'ngx-quill';
import { NgToastModule } from 'ng-angular-popup';
import { DataTablesModule } from 'angular-datatables';
 
Import: [TabsModule.forRoot()];
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import { HeaderComponent } from './c/home/header/header.component';
import { FooterComponent } from './c/home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
    ],
  imports: [
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    SweetAlert2Module.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    BrowserModule,
    FormsModule,
    //EditorModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    QuillModule,
    NgxDropzoneModule,
    NgToastModule,
    DataTablesModule,
    TabsModule.forRoot(),
    TabsModule,
    PdfViewerModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    },
    
    { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 5 } },

    TabsetConfig,
    // {provide: LocalStorageService }

    // { provide: ErrorHandler, useClass: CustomErrorHandler },
    // { provide: ErrorHandler, useClass: CustomErrorHandler },
  ],

  bootstrap: [AppComponent],
  
})
export class AppModule {}
