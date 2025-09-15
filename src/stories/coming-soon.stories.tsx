import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComingSoon } from '@/components/misc/coming-soon'

const meta = {
  title: 'misc/coming-soon',
  component: ComingSoon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ComingSoon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
