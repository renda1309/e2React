import {
  Container,
  Title,
  Form,
  Input,
  ButtonForm,
  TaskContainer,
  TasckList,
  ButtonDelete,
  ButtonDeleteAll,
} from "./styles";
import { useState } from "react";
import { useReducer, useRef } from "react";

export const ToDo = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log("Elemento vacio");
      return;
    }
    const newTask = {
      id: Date.now(),
      tarea,
      completada: false,
    };
    const totalTareas = [newTask, ...tareas];
    setTareas(totalTareas);
    setTarea("");
  };

  const borrarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => {
      return tarea.id !== id;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <Container>
      <Title>Nuctasks</Title>
      <Form handleChange={handleChange} addTask={addTask} tarea={tarea}>
        <Input
          type="text"
          placeholder="¿Que tarea desea agregar?"
          navalue={tarea}
          onChange={handleChange}
        />
        <ButtonForm type="submit">Agregar</ButtonForm>
      </Form>
      <TaskContainer>
        {tarea.map((tarea) => (
          <TasckList
            key={tarea.id}
            id={tarea.id}
            tarea={tarea.tarea}
            borrarTarea={borrarTarea}
          >
            {tarea.tarea}
            <ButtonDelete onClick={() => borrarTarea(tarea.id)} id="eliminar">
              Borrar
            </ButtonDelete>
          </TasckList>
        ))}

        {/* <TasckList>
          {task}
          <ButtonDelete>Borrar</ButtonDelete>
        </TasckList> */}
      </TaskContainer>
      <ButtonDeleteAll>Borrar todas</ButtonDeleteAll>
    </Container>
  );
};
