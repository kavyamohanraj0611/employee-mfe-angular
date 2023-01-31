import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BasicDetailsService } from './basic-details.service';
import { employeeBasic } from './employee-basic-model';

describe('BasicDetailsService', () => {
  let service: BasicDetailsService;
  let fakeData:employeeBasic={
    "id":"ACE1234",
    "employeeName":"ABCD",
    "employeeDepartment":"Testing",
    "employeeEmail":"abcd@gmail.com",
    "employeePhoneNumber":9876543211
  }
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BasicDetailsService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getEmployeeBasic() should return data', () => {
    service.getEmployeeBasic().subscribe((res) => {
      expect(res).toEqual([fakeData]);
    });
    const req = http.expectOne('http://localhost:3000/employee');
    expect(req.request.method).toBe('GET');
    req.flush([fakeData]);
  });

  it(' addEmployeeBasic should post and return message', () => {
    service.addEmployeeBasic(fakeData).subscribe((res) => {
       expect(res).toEqual({ msg: 'success' });
    });
    const req = http.expectOne(`http://localhost:3000/employee`);
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });

});
