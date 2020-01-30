import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndiantechPage } from './indiantech.page';

describe('IndiantechPage', () => {
  let component: IndiantechPage;
  let fixture: ComponentFixture<IndiantechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiantechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiantechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
