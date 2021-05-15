import { useParams } from 'react-router-dom';

const MealDetails = () => {
  const { id } = useParams();
  return (
    <div>list details of meal with id :: { id }</div>
  )
}

export default MealDetails;
