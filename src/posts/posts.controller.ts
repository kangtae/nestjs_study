import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';

/* nest g resource */

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'newjens_official',
    title: '뉴진스 민지',
    content: '메이업 고고 있는 민지',
    likeCount: 100000,
    commentCount: 99999,
  },
  {
    id: 2,
    author: 'newjens_official',
    title: '뉴진스 해린',
    content: '노래 연습 하고 있는 해린',
    likeCount: 100000,
    commentCount: 99999,
  },
  {
    id: 3,
    author: 'blackpink_official',
    title: '블랙핑크 로제',
    content: '아파트 로제',
    likeCount: 100000,
    commentCount: 99999,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getPosts() {
    return posts;
  }
  @Get(':id')
  getPost(@Param('id') id: string) {
    const post = posts.find((post) => post.id === +id);
    if (!post) throw new NotFoundException();
    return post;
  }

  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    const post = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, post];

    return post;
  }
}
