import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonPie from './assets/lemon-pie.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$14.99',
    description: `Fresh and vibrant Greek salad featuring crisp lettuce, juicy tomatoes, cucumbers, tangy feta cheese, olives, and zesty dressing.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$4.99',
    description: `Freshly baked bread topped with ripe tomatoes, garlic, basil, and drizzled with olive oil. A classic Italian appetizer bursting with flavors.`,
  },
  {
    name: 'Lemon Pie',
    image: lemonPie,
    price: '$7.00',
    description: `A delightful citrus dessert with a tangy and refreshing flavor, topped with a fluffy meringue or creamy whipped cream.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) =>
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
