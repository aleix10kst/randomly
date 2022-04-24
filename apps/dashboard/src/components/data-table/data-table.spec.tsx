import { render } from '@testing-library/react';

import DataTable from './data-table';

describe('TableData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataTable />);
    expect(baseElement).toBeTruthy();
  });
});
