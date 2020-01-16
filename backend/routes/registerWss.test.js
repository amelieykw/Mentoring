import { registerWss } from './prices';
import { addObserver } from '../service';

jest.mock('../service');

describe('', () => {
  let registeredObj;

  addObserver.mockImplementation((obj) => {
    registeredObj = obj;
  });

  const mockSocketClient = {
    send: jest.fn(),
  };
  const wss = { clients: [mockSocketClient] };

  it('', () => {
    registeredObj = null;
    registerWss(wss);
    expect(addObserver).toHaveBeenCalledWith({ update: expect.any(Function) });
    expect(registeredObj).not.toBeNull();

    const data = 'a';
    registeredObj.update(data);
    expect(mockSocketClient.send).toHaveBeenCalledWith(JSON.stringify(data));
  });
});
