import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProjectDetailsService } from './project-details.service';

describe('ProjectDetailsService', () => {
  let service: ProjectDetailsService;
  let http:HttpTestingController;
  let fakeData={
    "id":"ACE1111",
    "employeeName":"ABCD",
    "projectName":"Example",
    "projectDescription":"Example project",
    "managerName":"XYZ"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProjectDetailsService);
    http=TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getEmployeeBasic() should return data', () => {
    service.getEmployeeProject().subscribe((res) => {
      expect(res).toEqual([fakeData]);
    });
    const req = http.expectOne('http://localhost:3000/project');
    expect(req.request.method).toBe('GET');
    req.flush([fakeData]);
  });

  it('addProject should post and return message', () => {
    service.addEmployeeProject(fakeData).subscribe((res) => {
       expect(res).toEqual({ msg: 'success' });
    });
    const req = http.expectOne(`http://localhost:3000/project`);
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });
});
