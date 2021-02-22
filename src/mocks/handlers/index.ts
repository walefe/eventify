import { rest } from 'msw';

import { composeUrl } from '@utils';

export default [
  rest.post(composeUrl('/login'), (req, res, ctx) => res(ctx.status(200))),
];
