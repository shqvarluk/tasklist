import {
    render, screen, 
} from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from './Button';

describe('Button', () => {
    test('simple render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('simple render with cleat theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
