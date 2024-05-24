import {Product} from './products';
import any = jasmine.any;
import anything = jasmine.anything;

describe('Products', () => {
  it('should create an instance', () => {
    expect(new Product(anything())).toBeTruthy();
  });
});
