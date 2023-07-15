import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MetaAdministrativeModule } from './bundles/meta/administrative/meta.administrative.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [MetaAdministrativeModule],
      introspection: true,
      autoSchemaFile: join(process.cwd(), 'src/.graphql/public.schema.gql'),
    }),
    MetaAdministrativeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
