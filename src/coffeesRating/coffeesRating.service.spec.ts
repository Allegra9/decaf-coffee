import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesRatingService } from './coffeesRating.service';

describe('CoffeesRatingService', () => {
  let service: CoffeesRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeesRatingService],
    }).compile();

    service = module.get<CoffeesRatingService>(CoffeesRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
