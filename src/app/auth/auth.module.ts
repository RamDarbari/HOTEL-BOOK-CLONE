import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticationsComponent } from './authentications/authentications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { hydrationMetaReducer } from '../hydration.reducer';
import { authReducer } from './store/auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';

@NgModule({
  declarations: [AuthenticationsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AuthModule {}
