import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastCreateComponent } from './podcast-create.component';

describe('PodcastCreateComponent', () => {
  let component: PodcastCreateComponent;
  let fixture: ComponentFixture<PodcastCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
