import { classNames } from './classNames'

describe('Тесты функции classNames', () => {
    test('Тест на пустоту', () => {
        expect(classNames('')).toBe('')
    })

    test('С модификаторами', () => {
        const modifiers = { 'active': true, 'large': false, 'disabled': true };
        const result = classNames('generic', modifiers);
        expect(result).toBe('generic active disabled');
    })

    test('С дополнительными классами', () => {
        const additionalClasses = ['primary', 'rounded'];
        const result = classNames('generic', {}, additionalClasses);
        expect(result).toBe('generic primary rounded');
    })
    
    test('С модификаторами и дополнительными классами', () => {
        const modifiers = { 'active': true, 'large': false, 'disabled': true };
        const additionalClasses: string[] = ['primary', 'rounded'];
        const result = classNames('generic', modifiers, additionalClasses);
        expect(result).toBe('generic primary rounded active disabled');
    })


    test('C комплексными модификаторы (логические и страковые значения)', () => {
        const modifiers = { 'active': true, 'size': 'medium', 'theme-dark': true };
        const result = classNames('generic', modifiers);
        expect(result).toBe('generic active size theme-dark');
    })


    test('Пустой объект модификатора (модификаторы не применены)', () => {
        const modifiers = {};
        const result = classNames('generic', modifiers);
        expect(result).toBe('generic');
    })

    test('Логические модификаторы с ложными значениями (игнорируются)', () => {
        const modifiers = { 'active': false, 'large': '', 'disabled': false };
        const filteredModifiers = Object.fromEntries(
        Object.entries(modifiers).filter(([_, value]) => Boolean(value)));
        const result = classNames('generic', filteredModifiers);
        expect(result).toBe('generic');
    })

    test('Смешивание разных типов данных в дополнительных классах', () => {
        const additionalClasses: (string | boolean | number)[] = ['primary', true, 'rounded', 123];
        const filteredClasses: string[] = additionalClasses.map((cls) => String(cls));
        const result = classNames('generic', {}, filteredClasses);
        expect(result).toBe('generic primary true rounded 123');
    })

    test('Пустой базовый класс', () => {
        const baseClass = '';
        const result = classNames(baseClass, {});
        expect(result).toBe('');
    });

    test('Неопределенный базовый класс', () => {
        const result = classNames(undefined, {});
        expect(result).toBe('');
    })

    test('Нет аргументов (по умолчанию пустая строка)', () => {
        const result = classNames();
        expect(result).toBe('');
    })

    test('Использование других разделителей (например, подчеркивания)', () => {
        const baseClass = 'generic_disabled';
        const modifiers = { 'active': true, 'theme-dark': true };
        const result = classNames(baseClass, modifiers);
        expect(result).toBe('generic_disabled active theme-dark');
    })
})