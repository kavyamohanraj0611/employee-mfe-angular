import { Location } from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let router:Router;
  let location:Location;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    router=TestBed.inject(Router)
    location=TestBed.inject(Location)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('on ',
  fakeAsync(()=>{
    spyOn(service,'canActivate').and.returnValue(false)
    tick();
    expect(location.path()).toEqual('/')
  }))
});
