import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
class worker {
  constructor(stringUrl, type) {
    this.url = stringUrl;
    this.type = type;
    this.onmessage = () => {};
  }

  postMessage(msg) {
    this.onmessage(msg);
  }
}
global.Worker = worker;
global.window = {
  location: {},
};
