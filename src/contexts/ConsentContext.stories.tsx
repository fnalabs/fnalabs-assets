import type { Meta, StoryObj } from 'storybook-react-rsbuild'
import { useContext } from 'react'
import { expect, within } from 'storybook/test'
import Button from '../components/Button/Button'

import ConsentProvider, {
  CONSENTED,
  DECLINED,
  ConsentContext,
  ConsentDispatchContext,
} from './ConsentContext'

const meta = {
  title: 'Context/ConsentContext',
  component: ConsentProvider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ConsentProvider>
        <Story />
      </ConsentProvider>
    ),
  ],
} satisfies Meta<typeof ConsentProvider>
export default meta

type Story = StoryObj<typeof meta>
export const Basic: Story = {
  args: {
    children: 'consent? ',
  },
  render: (args) => {
    const consent = useContext(ConsentContext)
    const dispatch = useContext(ConsentDispatchContext)

    return (
      <div className="content">
        <p>{args.children}{consent.toString()}</p>
        <Button onClick={() => dispatch(CONSENTED)}>Consent</Button>{' '}
        <Button onClick={() => dispatch(DECLINED)}>Decline</Button>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('consent? false')).toBeVisible()

    await canvas.getByText('Consent').click()
    await expect(canvas.getByText('consent? true')).toBeVisible()

    await canvas.getByText('Decline').click()
    await expect(canvas.getByText('consent? false')).toBeVisible()
  },
}
