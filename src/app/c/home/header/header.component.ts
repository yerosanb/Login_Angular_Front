import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from 'src/app/Auth/services/auth.service';
import { UtilService } from 'src/app/Auth/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public authService: AuthService,
    private router: Router,
    public localStorageService: LocalStorageService,
    private utilService: UtilService,
    // private adminService: AdminService,
    // private accountService: AccountService,
    // private formBuilder: FormBuilder // private breakpointObserver: BreakpointObserver
  ) {

    console.log("the userrrrr"+ authService.isUser())
    // this.changePasswordPayload = {
    //   user_id: '',
    //   oldpassword: '',
    //   newpassword: '',
    //   confirmpassword: '',
    // };
    // this.passwordChangeForm = this.formBuilder.group(
    //   {
    //     oldpassword: new FormControl('', [
    //       Validators.required,
    //       Validators.minLength(8),
    //       Validators.maxLength(20),
    //     ]),
    //     newpassword: new FormControl('', [
    //       Validators.required,
    //       Validators.minLength(8),
    //       Validators.maxLength(20),
    //       createPasswordStrengthValidator(),
    //     ]),
    //     confirmpassword: new FormControl('', [
    //       Validators.required,
    //       Validators.minLength(8),
    //       Validators.maxLength(20),
    //     ]),
    //   },
    //   { validators: createPasswordMatchValidator.MatchValidator }
    // );
  }

}
