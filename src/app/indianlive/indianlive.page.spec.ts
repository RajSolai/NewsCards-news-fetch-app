import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndianlivePage } from './indianlive.page';

describe('IndianlivePage', () => {
  let component: IndianlivePage;
  let fixture: ComponentFixture<IndianlivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianlivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndianlivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
