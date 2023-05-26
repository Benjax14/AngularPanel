import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsViewerComponentComponent } from './items-viewer-component';

describe('ItemsViewerComponentComponent', () => {
  let component: ItemsViewerComponentComponent;
  let fixture: ComponentFixture<ItemsViewerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsViewerComponentComponent]
    });
    fixture = TestBed.createComponent(ItemsViewerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
