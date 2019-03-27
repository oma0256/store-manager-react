import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import storage from 'jest-localstorage-mock';

configure({ adapter: new Adapter() });
global.localStorage = storage;
