import './cards.css'
import ellipsis from '../../assets/icon-ellipsis.svg'

export const Cards = (props) => {

  const selectedTimeFrame = props.timeframe === 'Daily' ? 'Yesterday' : props.timeframe === 'Weekly' ? "Last Week" : "Last Month";

  return (
  <div>
    <div className='card' id={props.title.replace(/\s+/g, '') + '-bg'}>
      <div className="card-body">
        <p className='card-title'>{props.title}</p>
        <p className='hours'>{props.current}hrs</p>
        <img className='ellipsis' src={ellipsis} alt='ellipsis-icon'/>
        <span className='previous-total'>{selectedTimeFrame} - {props.previous}hrs</span>
      </div>
    </div>
  </div> 
  )
}
