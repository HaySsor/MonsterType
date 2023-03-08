import './card-item.styles.css';
import {Monster} from '../../App';

type CardProps = {
  monster: Monster;
};

const CardItem = ({monster}: CardProps) => {
  const {name, id, email} = monster;
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`{monster ${name}}`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default CardItem;
