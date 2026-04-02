import React, { type FC } from 'react'
import Column from '../../components/Columns/Column'
import Columns from '../../components/Columns/Columns'
import Container from '../../components/Container/Container'
import Hero from '../../components/Hero/Hero'
import ProgressBar, { type IProgressBar } from '../../components/ProgressBar/ProgressBar'

export interface ILoading {
  color?: IProgressBar['color']
}
const Loading: FC<ILoading> = ({ color = 'primary' }) => (
  <Hero color='black' size='fullheight'>
    <Container>
      <Columns vcentered>
        <Column>
          <ProgressBar color={color} size='small' />
        </Column>
      </Columns>
    </Container>
  </Hero>
)
export default Loading
