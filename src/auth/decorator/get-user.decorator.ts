import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if (data) {
      const temp = <Express.User>request.user;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return temp[data];
    }
    return request.user;
  },
);
