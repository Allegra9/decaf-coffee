import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'core',
      username: 'postgres_user',
      password: 'postgres_pass',
      autoLoadEntities: true,
      synchronize: true, // for dev only, disable for prod
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
