import React, { FC, ReactNode } from 'react'

export interface ILevelItem {
  content: ReactNode
  centered?: boolean
}
export interface ILevelGroup {
  left?: ILevelItem[]
  right?: ILevelItem[]
}
export interface ILevel {
  /**
   * List of items or optional groups to display in the level.<br />
   * <code>ILevelItem</code>
   * <pre>
   * interface ILevelItem {
   *   content: ReactNode
   *   centered?: boolean
   * }
   * </pre>
   * <code>ILevelGroup</code>
   * <pre>
   * interface ILevelGroup {
   *   left?: ILevelItem[]
   *   right?: ILevelItem[]
   * }
   * </pre>
   */
  items: ILevelGroup | ILevelItem[]
  /** Optional mobile variant for the level. */
  mobile?: boolean
  /** Optional nav variant for the level. */
  nav?: boolean
}

const renderItems = (items: ILevelItem[]) =>
  items.map((item, index) => <div key={`level-item-${index}`} className={`level-item${item.centered ? ' has-text-centered' : ''}`}>{item.content}</div>)

const renderGroups = (groups: ILevelGroup) => (
  <>
    {groups.left && <div className="level-left">{renderItems(groups.left)}</div>}
    {groups.right && <div className="level-right">{renderItems(groups.right)}</div>}
  </>
)

const Level: FC<ILevel> = ({ items, mobile, nav }) => {
  return nav
    ? (
      <nav className={`level${mobile ? ' is-mobile' : ''}`}>{Array.isArray(items) ? renderItems(items) : renderGroups(items)}</nav>
    )
    : (
      <div className={`level${mobile ? ' is-mobile' : ''}`}>{Array.isArray(items) ? renderItems(items) : renderGroups(items)}</div>
    )
}
export default Level
