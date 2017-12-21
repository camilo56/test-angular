import { CapitalizePipe } from './capitalize.pipe';

const capitalize = new CapitalizePipe();

describe('hello capitalize', () => {

  it('capitalize Pipe', () => {
    expect(capitalize).toBeTruthy();
  });

  it('capitalize transform', () => {
    expect(capitalize.transform('camilo')).toEqual('Camilo');
    expect(capitalize.transform('CAMILO COLMENARES')).toEqual('Camilo Colmenares');
    expect(capitalize.transform('camilo colmenares')).toEqual('Camilo Colmenares');
  });

  it('capitalize transform null', () => {
    expect(capitalize.transform(null)).toEqual('');
  });

  it('capitalize transform undefined', () => {
    expect(capitalize.transform(undefined)).toEqual('');
  });

});
