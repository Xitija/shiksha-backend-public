import { HttpModule } from "@nestjs/axios";
import { CacheModule, Module } from "@nestjs/common";
import { HasuraModule } from "src/adapters/hasura/hasura.module";
import { LikeController } from "./like.controller";
import { LikeAdapter } from "./likeadapter";
const ttl = process.env.TTL as never;
@Module({
  imports: [
    HasuraModule,
    HttpModule,
    CacheModule.register({
      ttl: ttl,
    }),
  ],
  controllers: [LikeController],
  providers: [LikeAdapter],
})
export class LikeModule {}
