import { rest } from 'msw';

// mock api
export const example1 = rest.post('mock/api/example1', (req, res, ctx) => {
  return res(
    ctx.json({
      id: '0001',
      name: 'Ueda Jirou',
      email: 'trick@fanclub.co.jp',
    })
  );
});
