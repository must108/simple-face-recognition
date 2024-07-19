import { screen, render } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/page';

test("renders element", () => {
    render(<Home />)
    const wholeElem = screen.getByTestId('home-elem');

    expect(wholeElem);
});

