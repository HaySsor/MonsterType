import './card-list.styles.css';
import CardItem from '../card-item/card-item.component';
import {Monster} from '../../App';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({monsters}: CardListProps) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <CardItem monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
