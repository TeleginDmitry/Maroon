import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    },
    staticDirs: ['..\\public'],
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                api: path.resolve(__dirname, '../src/api'),
                assets: path.resolve(__dirname, '../src/assets'),
                components: path.resolve(__dirname, '../src/components'),
                configs: path.resolve(__dirname, '../src/configs'),
                contexts: path.resolve(__dirname, '../src/contexts'),
                hooks: path.resolve(__dirname, '../src/hooks'),
                providers: path.resolve(__dirname, '../src/providers'),
                router: path.resolve(__dirname, '../src/router'),
                services: path.resolve(__dirname, '../src/services'),
                shared: path.resolve(__dirname, '../src/shared'),
                utils: path.resolve(__dirname, '../src/utils'),
                store: path.resolve(__dirname, '../src/store')
            }
        }
        return config
    }
}
export default config
