import { screen, render } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/page';

test("Home component smoke test", () => {
    render(<Home />);
});

test("renders element", () => {
    render(<Home />)
    const wholeElem = screen.getByTestId('home-elem');

    expect(wholeElem);
});

