import { Test, TestingModule } from '@nestjs/testing';
import { PostapiService } from './postapi.service';

describe('PostapiService', () => {
  let service: PostapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostapiService],
    }).compile();

    service = module.get<PostapiService>(PostapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
