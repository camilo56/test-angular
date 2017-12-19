
import { HttpModule } from '@angular/http';
import { DebugElement } from '@angular/core';
import { JokerService } from './joker.service';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { JokeComponent } from './joke/joke.component';
import { TestBed, async, ComponentFixture} from '@angular/core/testing';

describe('hello camilo', () => {

  let component: AppComponent;
  let element: DebugElement;
  let fixture: ComponentFixture<AppComponent>;
  const expected = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [JokeComponent, AppComponent, CapitalizePipe],
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

  it('Is Chuck Norris Jokes', () => {
    expect(component.title).toEqual('Chuck Norris Jokes');
  });

  it('title is empty', () => {
    expect(element.nativeElement.querySelector('#title').textContent).toEqual('');
  });

});
