import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if (data) {
      const temp = request.user;
      if (temp) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return temp[data];
      }
    }
    return request.user;
  },
);
