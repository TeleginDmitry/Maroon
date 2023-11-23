import { classNames } from './classNames'

describe('Тестирование функции classNames', () => {
    test('Тест на пустоту', () => {
        const result = classNames('')
        expect(result).toBe('')
    })

    test('Тест на первый обязательный параметр', () => {
        const result = classNames('cls')
        expect(result).toBe('cls')
    })

    test('Тест на пустые условные классы', () => {
        const result = classNames('', {})
        expect(result).toBe('')
    })

    test('Тест на условные классы', () => {
        const result = classNames('', { cls: true, cls2: false })
        expect(result).toBe('cls')
    })

    test('Тест на пустые дополнительные классы', () => {
        const result = classNames('', {}, [])
        expect(result).toBe('')
    })

    test('Тест на дополнительные классы', () => {
        const result = classNames('', {}, ['cls'])
        expect(result).toBe('cls')
    })

    test('Тест на пустые классы', () => {
        const result = classNames('', {}, [])
        expect(result).toBe('')
    })
})
