import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatNativeDateModule,
   MatAutocompleteModule,
   MatBadgeModule,
    MatBottomSheetModule,
     MatButtonModule,
      MatButtonToggleModule,
       MatCardModule,
        MatCheckboxModule,
         MatChipsModule,
          MatStepperModule,
           MatDialogModule,
            MatDividerModule,
             MatExpansionModule,
              MatGridListModule,
               MatIconModule,
                MatInputModule,
                 MatListModule,
                  MatMenuModule,
                   MatPaginatorModule,
                   MatProgressBarModule,
                   MatProgressSpinnerModule,
                   MatRadioModule, MatRippleModule,
                   MatSelectModule,
                   MatSidenavModule,
                   MatSliderModule,
                   MatSlideToggleModule,
                   MatSnackBarModule,
                   MatSortModule,
                   MatTableModule,
                   MatTabsModule,
                   MatToolbarModule,
                   MatTooltipModule,
                   MatTreeModule,
                   } from '@angular/material';
import { HeaderComponent } from './header/header.component';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,



  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'sk'},

  {
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },
  {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},],
  bootstrap: [AppComponent]
})
export class AppModule { }
