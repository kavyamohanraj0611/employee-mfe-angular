import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HomeComponent } from './home.component';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule, routes } from '../app-routing.module';
import { AppModule } from 'projects/mfe1/src/app/app.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let location: Location
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.inject(Location)
    router = TestBed.inject(Router)
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));

  it('should go to basic url  on clicking basic details button', () => {
    const spy = spyOn(router, 'navigate');
    component.viewEmployeeBasic();
    expect(
      spy.calls.first().args[0].toString().replace('[', '').replace("'", '')
    ).toContain('/basic');
  });

  it('should go to project url on clicking project details button', () => {
    const spy = spyOn(router, 'navigate');
    component.viewEmployeeProject();
    expect(
      spy.calls.first().args[0].toString().replace('[', '').replace("'", '')
    ).toContain('/project');
  });

});
