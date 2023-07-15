import { Query, Resolver } from '@nestjs/graphql';
import { AdministrativeRegion } from '../types/region.type';

@Resolver(() => AdministrativeRegion)
export class AdministrativeRegionQueryResolver {
  @Query(() => String)
  getAdministrativeRegion(): string {
    return 'Hello World!';
  }
}
