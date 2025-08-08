import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticulosComponent } from './blog-articulos.component';

describe('BlogArticulosComponent', () => {
  let component: BlogArticulosComponent;
  let fixture: ComponentFixture<BlogArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
