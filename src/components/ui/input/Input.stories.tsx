/* eslint-disable import/no-default-export */
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
    component: Input
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
    args: {
        placeholder: 'Email...'
    }
}

export const Children: Story = {
    args: {
        placeholder: 'Password...',
        children: <div>Children</div>
    }
}
