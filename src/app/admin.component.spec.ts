import {async, TestBed} from '@angular/core/testing';

import {AppComponent} from './admin.component';
import {RouterModule} from '@angular/router';
import {AdminRoutingModule} from './admin-routing.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterModule,
            AdminRoutingModule,
            DashboardModule
        ],
        declarations: [
            AppComponent
        ],
        providers: [
            {provide: APP_BASE_HREF, useValue: '/'}
        ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to Bizthu frontend arch test!');
  }));
});
