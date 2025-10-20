import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}
/* nest g resource */
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getPost(): Post {
    return {
      author: 'newjens_official',
      title: '뉴진스 민지',
      content: '메이업 고고 있는 민지',
      likeCount: 100000,
      commentCount: 99999,
    };
  }
}
