import DataContext from './DataContext'
import Item from './Item'

const Transection = (props) => {
    const {items} = props
    return (
      <div>
        <ul className="item-list">
          {items.map((element) => {
            return <Item {...element} key={element.id}/>
          })}
        </ul>
    </div>
    )
  }
  export default Transection