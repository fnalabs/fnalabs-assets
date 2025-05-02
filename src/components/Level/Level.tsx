import React, { FC, ReactNode } from 'react'

export type ILevelItem = {
  content: ReactNode
  centered?: boolean
}
export interface ILevelGroup {
  left?: ILevelItem[]
  right?: ILevelItem[]
}
export interface ILevel {
  items: ILevelGroup | ILevelItem[]
}

const renderItems = (items: ILevelItem[]) =>
  items.map(item => <div className={`level-item${item.centered ? ' has-text-centered' : ''}`}>{item.content}</div>)

const renderGroups = (groups: ILevelGroup) => (
  <>
    {groups.left && <div className="level-left">{renderItems(groups.left)}</div>}
    {groups.right && <div className="level-right">{renderItems(groups.right)}</div>}
  </>
)

const Level: FC<ILevel> = ({ items }) => (
  <div className="level">{Array.isArray(items) ? renderItems(items) : renderGroups(items)}</div>
)
export default Level
