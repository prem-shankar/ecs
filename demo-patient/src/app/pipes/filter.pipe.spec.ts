/**
 * Created By : Prem Shankar
 * common class to filter the data according to the argument and reg ex passed
 */

import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});


