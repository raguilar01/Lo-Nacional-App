import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { M03AlmuerzosPage } from './m03-almuerzos.page';

describe('M03AlmuerzosPage', () => {
  let component: M03AlmuerzosPage;
  let fixture: ComponentFixture<M03AlmuerzosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ M03AlmuerzosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(M03AlmuerzosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
