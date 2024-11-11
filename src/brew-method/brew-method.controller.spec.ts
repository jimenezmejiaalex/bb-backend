import { Test, TestingModule } from '@nestjs/testing';
import { BrewMethodController } from './brew-method.controller';
import { BrewMethodService } from './brew-method.service';

describe('BrewMethodController', () => {
  let controller: BrewMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrewMethodController],
      providers: [BrewMethodService],
    }).compile();

    controller = module.get<BrewMethodController>(BrewMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
