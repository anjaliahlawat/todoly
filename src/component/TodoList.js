import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TodoList(props) {
  const dispatch = useDispatch()
  //using selector 
  const bugs = useSelector(getUnresolvedBugs) // here pass only reference

  useSelector( state => state.entities.bugs.list) //here call function instead of passing it as a reference

  useEffect(() => {
      dispatch(loadBugs())
  }, [])
  return (
    <ul>
      {props.bugs.map((bug) => (
        <li>
          {bug.description}
          <button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;