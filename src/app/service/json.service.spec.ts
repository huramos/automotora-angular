import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { JsonService } from './json.service';

describe('JsonService', () => {
  let service: JsonService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [JsonService]
  }));

  it('should be created', () => {
    const service: JsonService = TestBed.get(JsonService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: JsonService = TestBed.get(JsonService);
    expect(service.MetodoAutos).toBeTruthy();
   });
});
