import React, { type FC } from 'react'
import Column from '../../components/Columns/Column'
import Columns from '../../components/Columns/Columns'
import Container from '../../components/Container/Container'
import Hero, { type IHero } from '../../components/Hero/Hero'
import ProgressBar, { type IProgressBar } from '../../components/ProgressBar/ProgressBar'

export interface ILoading {
  color?: IProgressBar['color']
  size?: IHero['size']
}
const Loading: FC<ILoading> = ({ color = 'primary', size = 'fullheight' }) => (
  <Hero color='black' size={size}>
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
