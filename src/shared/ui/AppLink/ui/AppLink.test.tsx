import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import '@testing-library/jest-dom';

describe('AppLink', () => {
    test('AppLink to be in document', () => {
        renderWithTranslation(<button>TEST</button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
