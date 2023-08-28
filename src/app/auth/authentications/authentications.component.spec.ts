import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../store/auth.reducers';
import { AuthenticationsComponent } from './authentications.component';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

describe('AuthenticationsComponent', () => {
  let component: AuthenticationsComponent;
  let fixture: ComponentFixture<AuthenticationsComponent>;
  let authService: AuthService;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationsComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({ auth: authReducer }),
      ],
      providers: [AuthService, ToastrService],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationsComponent);
    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);
    toastrService = TestBed.inject(ToastrService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check login form is valid', fakeAsync(() => {
    const form = {
      valid: true,
      value: {
        emailAddress: 'flashman2092@gmail.com',
        password: 'Raghav@80',
      },
    };
    spyOn(authService, 'login').and.callThrough();

    component.login(form.value);
    // tick();
    expect(authService.login).toHaveBeenCalled();
    expect(toastrService.error).not.toHaveBeenCalled();
  }));
});
