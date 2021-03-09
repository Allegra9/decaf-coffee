import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { CoffeesRatingService } from './coffeesRating.service';

@Module({
  imports: [CoffeesModule],
  providers: [CoffeesRatingService],
})
export class CoffeesRatingModule {}
