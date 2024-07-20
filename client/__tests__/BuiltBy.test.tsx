import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import BuiltBy from '@/app/components/BuiltBy';

test("built by smoke test", () => {
    render(<BuiltBy />);
});

test("renders built by and has correct styles", () => {
    render(<BuiltBy />);
    const elem = screen.getByTestId(
        "built-by"
    );

    expect(elem);
    expect(elem).toHaveClass('text-[0.65rem] leading-4 mt-0 text-slate-700');
});