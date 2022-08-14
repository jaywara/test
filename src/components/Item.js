import PropTypes from 'prop-types'
import DataContext from './DataContext'

const Item = (props) => {
    const {title,amount} = props
    const status = amount<0 ? "item expense" : "item income"
    const symbol = amount<0 ? "-" : "+"
    return (
        <li className={status}>{title} <span>{symbol}{Math.abs(amount)}</span></li>
    )
}

Item.prototype={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item