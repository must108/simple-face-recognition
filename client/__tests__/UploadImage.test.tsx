import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import UploadImage from '@/app/components/UploadImage';

test("uploadimage smoke test", () => {
    render(<UploadImage func={() => {}} file={null} />);
});

test("renders div, label, correct classes", () => {
    const sampleFunct = () => {
        return;
    }

    let sampleVar = null;

    render(<UploadImage func={sampleFunct} file={sampleVar} />);
    const elem = screen.getByTestId('primary-div');
    const label = screen.getByTestId('select-image-text');
    expect(elem);
    expect(label);
    expect(elem).toHaveClass('flex justify-center items-center flex-row');
    expect(label).toHaveClass('bg-slate-900 hover:bg-blue-700 text-white px-2 py-1 rounded font-bold transition delay-50 border-2 border-gray-700 hover:border-transparent');
    
    sampleVar = 1;
    render(<UploadImage func={sampleFunct} file={sampleVar} />);

    const checkElemAgain = screen.getByTestId('check');
    expect(elem);
    expect(label);
    expect(elem).toHaveClass('flex justify-center items-center flex-row');
    expect(label).toHaveClass('bg-slate-900 hover:bg-blue-700 text-white px-2 py-1 rounded font-bold transition delay-50 border-2 border-gray-700 hover:border-transparent');
    expect(checkElemAgain);
});