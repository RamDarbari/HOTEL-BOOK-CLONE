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

    // Inject services
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
        emailAddress: 'flashman2092@gmail.com', // Change property name to emailAddress
        password: 'Raghav@80',
      },
    };

    // Spy on authService.login
    spyOn(authService, 'login').and.callThrough();

    // Trigger login
    component.login(form.value);

    // Flush the setTimeouts in the login function
    tick();

    // Expect that authService.login was called
    expect(authService.login).toHaveBeenCalled();
    expect(toastrService.error).not.toHaveBeenCalled();
  }));
});
