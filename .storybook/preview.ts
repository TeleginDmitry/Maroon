import type { Preview } from '@storybook/react'
import '../src/assets/styles/mixins.css'

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                {
                    name: 'white',
                    value: '#f8f8f6'
                }
            ]
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview
