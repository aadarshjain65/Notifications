const Notification = props => {
  const {className, iconUrl, message} = props
  const containerClassName = `notification-container ${className}`
  return (
    <div className={containerClassName}>
      <img src={iconUrl} className='icon' />
      <p className='message'> {message} </p>
    </div>
  )
}

const element = (
  <div className='notifications-container'>
    <h1 className='heading'> Notifications </h1>
    <Notification
      className='information-notification'
      iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      message='Information Message'
    />
    <Notification
      className='success-notification'
      iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      message='Success Message'
    />
    <Notification
      className='warning-notification'
      iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      message='Warning Message'
    />
    <Notification
      className='danger-notification'
      iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      message='Error Message'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
