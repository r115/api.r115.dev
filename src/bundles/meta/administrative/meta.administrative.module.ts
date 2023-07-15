import { Module } from '@nestjs/common';
import { AdministrativeRegionQueryResolver } from './graphql/queries/administrative-region.query';

@Module({
  imports: [],
  controllers: [],
  providers: [AdministrativeRegionQueryResolver],
})
export class MetaAdministrativeModule {}
