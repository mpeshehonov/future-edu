import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const CoursesPage = () => {
  return (
    <div>
      CoursesPage component works
      <Link to="/1">Пожарная безопасность</Link>
    </div>
  );
};

export default CoursesPage;
