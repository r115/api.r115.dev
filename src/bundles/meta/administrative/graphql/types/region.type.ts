import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class AdministrativeRegion {
  @Field((type) => ID)
  id: string;
}
