import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from './state/login.state';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let fakeData={
    "id":"ACE1111",
    "name":"ABCD",
    "email":"abcd@gmail.com",
    "password":"12345678"
  }
  let http:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[provideMockStore({initialState})]
    });
    service = TestBed.inject(UserService);
    http=TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loginUser() should return data', () => {
    service.loginUser(fakeData.email,fakeData.password).subscribe((res) => {
      expect(res).toEqual([fakeData]);
    });
    const req = http.expectOne('http://localhost:3000/users');
    expect(req.request.method).toBe('GET');
    req.flush([fakeData]);
  });
  
});
