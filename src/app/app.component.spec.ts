
import { HttpModule } from '@angular/http';
import { DebugElement } from '@angular/core';
import { JokerService } from './joker.service';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { JokeComponent } from './joke/joke.component';
import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { TestComponent } from './test/test.component';
import { UserTestComponent } from './user-test/user-test.component';
import { ListTestComponent } from './list-test/list-test.component';
import { FormTestComponent } from './form-test/form-test.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('hello camilo', () => {
  let component: AppComponent;
  let element: DebugElement;
  let fixture: ComponentFixture<AppComponent>;
  const expected = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, ReactiveFormsModule, FormsModule],
      declarations: [JokeComponent, TestComponent, UserTestComponent, ListTestComponent,
                    AppComponent, CapitalizePipe, FormTestComponent],
      providers: [JokerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  });

  it('be true', () => {
    expect(expected).toBe(true);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Is Chuck Norris Jokes', () => {
    expect(component.title).toEqual('Chuck Norris Jokes');
  });

  it('title is empty', () => {
    expect(element.nativeElement.querySelector('#title').textContent).toEqual('');
  });

});
