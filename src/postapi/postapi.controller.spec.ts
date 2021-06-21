import { Test, TestingModule } from '@nestjs/testing';
import { PostapiController } from './postapi.controller';

describe('PostapiController', () => {
  let controller: PostapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostapiController],
    }).compile();

    controller = module.get<PostapiController>(PostapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
