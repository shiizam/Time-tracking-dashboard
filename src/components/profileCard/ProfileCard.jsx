import './profile.css'

export const ProfileCard = (props) => {

  const links = ["Daily", "Weekly", "Monthly"]

  return (
    <div className='profile-card'>
      <div className="profile-top">
        <div className="profile-pic"></div>
        <div className="profile-name">
          <p>Report For</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="date-links">
        {
          links.map(item => {
          const active = props.timeframe === item ? {color: 'white'} : null;   
          return (
            <span 
              className='date-links'
              key={item}
              id={item} 
              onClick={props.handleClick}
              style={active}
              >
                {item}
              </span>
              )
            })
          }
      </div>
    </div>
  )
}
