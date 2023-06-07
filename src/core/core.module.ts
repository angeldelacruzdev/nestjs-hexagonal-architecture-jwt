import { DynamicModule, Module, Type } from '@Nestjs/common';

@Module({})
export class CoreModule {
  static register(): DynamicModule {
    return; // my awesome module config
  }
}
