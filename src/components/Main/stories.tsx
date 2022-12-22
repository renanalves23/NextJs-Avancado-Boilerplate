import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
} as ComponentMeta<typeof Main>

const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Primary = Basic.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'React avançado',
  description: 'Typescript, ReactJs, NextJs, Styled-Components',
}
