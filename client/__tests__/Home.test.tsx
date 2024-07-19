import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/page';

test("renders title with correct text", () => {
    const { getByText } = render(<Home />);
    const title = getByText(
        "facial detection tool",
    );

    expect(title);
});