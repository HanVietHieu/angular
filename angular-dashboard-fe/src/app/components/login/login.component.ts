import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Service } from '../../services';
import { Router } from '@angular/router';
import { PATHS } from '../../../paths/paths';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastComponent } from '../toast/toast.component';
import { TYPE_NOTI_TOAST } from '../../../helper/const';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, CommonModule, ToastComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  dataUserName: string = '';
  dataPassWord: string = '';
  isValidate: boolean = false;
  editItems: object = {};
  isShowPw = false;
  toastNoti = {
    type: '',
    content: '',
  };

  typeForm: {
    user: Number;
    pass: Number;
  } = {
    user: 1,
    pass: 2,
  };

  constructor(private apiService: Service, private router: Router) {}

  handleChange = (event: any, type: Number) => {
    this.isValidate = false;
    if (type === this.typeForm.user) {
      return (this.dataUserName = event.target.value);
    }
    this.dataPassWord = event.target.value;
  };

  handleActionPw = () => {
    this.isShowPw = !this.isShowPw;
  };

  handleSubmit: () => void = () => {
    if (this.dataPassWord && this.dataUserName) {
      this.apiService
        .postApi('http://125.212.238.157:9898/api/login', {
          userName: this.dataUserName,
          password: this.dataPassWord,
        })
        .subscribe((data) => {
          if (data.errCode == 0) {
            this.router.navigate([PATHS.home]);
            this.toastNoti = {
              type: TYPE_NOTI_TOAST.success,
              content: data.message,
            };
            localStorage.setItem('isLoginSuccess', 'true');
          } else {
            this.toastNoti = {
              type: TYPE_NOTI_TOAST.error,
              content: data.message,
            };
          }
          setTimeout(() => {
            this.toastNoti = {
              type: '',
              content: '',
            };
          }, 3500);
        });
    } else {
      this.isValidate = true;
    }
  };
}
