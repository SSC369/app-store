import './index.css'

const AppItem = props => {
  const {details} = props
  const {imageUrl, appName} = details

  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
