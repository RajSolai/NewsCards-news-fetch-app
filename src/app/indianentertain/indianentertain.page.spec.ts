import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndianentertainPage } from './indianentertain.page';

describe('IndianentertainPage', () => {
  let component: IndianentertainPage;
  let fixture: ComponentFixture<IndianentertainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianentertainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndianentertainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
