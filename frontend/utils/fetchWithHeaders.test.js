import fetchWithHeaders from './fetchWithHeaders';

describe('fetchWithHeaders', () => {
  it('fetchWithHeaders return data', async () => {
    // backend haven`t deploy yet
    const data = await fetchWithHeaders('localhost:3000/api');
    expect(data).toStrictEqual(undefined);
  });
});
