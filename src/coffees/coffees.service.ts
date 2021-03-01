import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto, UpdateCoffeeDto } from './coffees.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return await this.coffeeRepository.find();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne(id);
    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    // preload - creates new entity based on the object passed into it
    // returns undefined if entity not found
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    const coffee = await this.coffeeRepository.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }
}
