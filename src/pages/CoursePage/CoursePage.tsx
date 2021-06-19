import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const CoursePage = () => {
  const params = useRouteMatch<any>('/:id');

  return (
    <div>
      CoursePage component works
      <Link to={`/${params?.params.id}/quiz`}>Квиз</Link>
    </div>
  );
};

export default CoursePage;
