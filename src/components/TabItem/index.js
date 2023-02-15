import './index.css'

const TabItem = props => {
  const {details, onSelectedTab, isActive} = props
  const {tabId, displayText} = details

  const onClickTab = () => {
    onSelectedTab(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-button' : ''

  return (
    <li className="tab">
      <button
        onClick={onClickTab}
        className={`button ${activeTabBtnClassName}`}
        type="button"
      >
        <h1 className="tab-name">{displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem
