import { CapitalizePipe } from './capitalize.pipe';

const capitalize = new CapitalizePipe();

describe('hello capitalize', () => {

  it('capitalize name', () => {
    expect(capitalize.transform('camilo colmenares')).toEqual('Camilo Colmenares');
  });

});
