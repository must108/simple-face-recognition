import { screen, render, getByTestId } from '@testing-library/react';
import { expect, test } from 'vitest';

import UploadButton from '@/app/components/UploadButton';

test("uploadButton smoke test", () => {
    render(<UploadButton />);
});

test("renders button, has correct classes", () => {
    render(<UploadButton />);
    const elem = screen.getByTestId('upload-button');

    expect(elem);
    expect(elem).toHaveClass('bg-blue-700 hover:bg-blue-900 text-white px-3 py-1 rounded font-bold transition delay-50')
});