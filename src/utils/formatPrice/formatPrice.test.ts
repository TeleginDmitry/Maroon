import { formatPrice } from './formatPrice'

describe('Тестирование функции formatPrice', () => {
    test('Тест на значение 0', () => {
        const result = formatPrice(0)
        expect(result).toBe('0')
    })

    test('Тест на значение 100', () => {
        const result = formatPrice(100)
        expect(result).toBe('100')
    })

    test('Тест на значение 1000', () => {
        const result = formatPrice(1000)
        expect(result).toBe('1 000')
    })

    test('Тест на значение 100000', () => {
        const result = formatPrice(100000)
        expect(result).toBe('100 000')
    })

    test('Тест на значение 100000000', () => {
        const result = formatPrice(100000000)
        expect(result).toBe('100 000 000')
    })
})
