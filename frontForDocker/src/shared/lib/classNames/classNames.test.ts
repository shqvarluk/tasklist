import { classNames } from 'shared/lib/classNames/classNames';

describe ('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classnames', () => {
        const expectedClassNames = 'someClass some-second-class some-third-class';
        expect(classNames('someClass', {}, [
            'some-second-class',
            'some-third-class',
        ])).toBe(expectedClassNames);
    });

    test('with optional classnames', () => {
        const expectedClassNames = 'someClass hovered selected';
        expect(classNames('someClass', {
            hovered: true,
            unhovered: false,
            selected: true,
        })).toBe(expectedClassNames);
    });

    test('with optional and additional classnames', () => {
        const expectedClassNames = 'someClass additional additional-2 hovered selected';
        expect(classNames('someClass', {
            hovered: true,
            unhovered: false,
            selected: true,
        }, ['additional', 'additional-2']))
            .toBe(expectedClassNames);
    });
});
