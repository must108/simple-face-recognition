import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Description from '@/app/components/Description';

test("Description smoke test", () => {
    render(<Description />);
});

test("renders description component and has correct text, class", () => {
    render(<Description />);
    const elem = screen.getByTestId('desc');
    const elemChild = screen.getByTestId('child_1');
    const elemChild2 = screen.getByTestId('child_2');
    const elemChild3 = screen.getByTestId('child_3');
    const elemChild4 = screen.getByTestId('child_4');

    expect(elem);
    expect(elem).toHaveClass('w-[390px]');
    expect(elem).toContainElement(elemChild);
    expect(elem).toContainElement(elemChild2);
    expect(elem).toContainElement(elemChild3);
    expect(elem).toContainElement(elemChild4);
});