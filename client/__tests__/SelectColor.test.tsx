import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import SelectColor from '@/app/components/SelectColor';

test("selectColor smoke test", () => {
    render(<SelectColor func={(() => {})} />);
})

test("rendered element exists, has classes, and has all options", () => {
    const handleColorChange = (e: any) => {
        return;
    }

    render(<SelectColor func={handleColorChange} />)
    const elem = screen.getByTestId('choose-color');

    expect(elem);
    expect(elem).toHaveClass('bg-slate-900 border-2 border-gray-700 rounded-md px-3 py-1');
    expect(elem).toContainElement(screen.getByTestId('option1'));
    expect(elem).toContainElement(screen.getByTestId('option2'));
    expect(elem).toContainElement(screen.getByTestId('option3'));
    expect(elem).toContainElement(screen.getByTestId('option4'));
    expect(elem).toContainElement(screen.getByTestId('option5'));
    expect(elem).toContainElement(screen.getByTestId('option6'));
    expect(elem).toContainElement(screen.getByTestId('option7'));
    expect(elem).toContainElement(screen.getByTestId('option8'));
    expect(elem).toContainElement(screen.getByTestId('option9'));
});