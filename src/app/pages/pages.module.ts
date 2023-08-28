import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RoutesComponent } from './routes/routes.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HotelEffects } from './store/hotels.effects';
import { hotelsReducer } from './store/hotels.reducer';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReusableComponentModule } from '../reusable-component/reusable-component.module';
import { ModalComponent } from '../reusable-component/modal/modal.component';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [HomeComponent, HotelsComponent, RoutesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    PagesRoutingModule,
    ReusableComponentModule,

    StoreModule.forFeature('hotel', hotelsReducer),
    EffectsModule.forFeature([HotelEffects]),
  ],
})
export class PagesModule {}
