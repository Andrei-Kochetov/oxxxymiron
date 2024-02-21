import { Link } from 'react-router-dom';
import Icon from '../../../Icon/Icon';

interface TourItemProps {
  date: string;
  clubName: string;
  location: string;
}

const TourItem = ({ date, clubName, location }: TourItemProps) => {
  return (
    <li className="tour-item">
      <div>
        <p className="tour-item__date">{date}</p>
        <p className="tour-item__club-name">{clubName}</p>
      </div>
      <p className="tour-item__location">{location}</p>
      <Link to="/#" className="tour-item__button">
        <>
          <p>Билеты</p>
          <Icon name="arrow-right" />
        </>
      </Link>
    </li>
  );
};

export default TourItem;
