import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
    test('Button to be in document', () => {
        renderWithTranslation(
            <Button
                clickEvent={(e) => {
                    console.log(e);
                }}
            >
                TEST
            </Button>,
        );
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
