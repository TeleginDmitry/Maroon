/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
    component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Применить'
    }
}

export const Disable: Story = {
    args: {
        children: 'Применить',
        disabled: true
    }
}
