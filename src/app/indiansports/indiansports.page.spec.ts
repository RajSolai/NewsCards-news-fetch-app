import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndiansportsPage } from './indiansports.page';

describe('IndiansportsPage', () => {
  let component: IndiansportsPage;
  let fixture: ComponentFixture<IndiansportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiansportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiansportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
