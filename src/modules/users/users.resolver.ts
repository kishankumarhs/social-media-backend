import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Query(() => String, { name: 'users' })
  helloWorld(): string {
    return 'Hello, World!';
  }
}
