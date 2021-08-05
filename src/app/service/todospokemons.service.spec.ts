import { TestBed } from '@angular/core/testing';

import { TodospokemonsService } from './todospokemons.service';

describe('TodospokemonsService', () => {
  let service: TodospokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodospokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
