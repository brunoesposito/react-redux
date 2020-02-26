import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addCourseAction } from '../../redux/actions';

import { Container, H1, Ul } from './style';

export default function CourseList() {
  const inputRef = useRef(null);
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function resetInput(input) {
    input.current.value = '';
    input.current.focus();
  }

  function addCourse() {
    dispatch(addCourseAction(inputRef.current.value))
    resetInput(inputRef);
  }

  return (
    <Container>
        <H1>Adicione cursos abaixo</H1>
        <form>
          <input ref={inputRef} type="text" placeholder="Nome do curso" />
          <button type="button" onClick={addCourse}>
              Adicionar curso
          </button>
        </form>
        <Ul>
            {courses.map(course => <li key={course}>{course}</li>)}
        </Ul>
    </Container>
  );
}
