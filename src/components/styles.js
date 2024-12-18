import styled from "styled-components";

export const Container = styled.div`
  background: rgb(197, 197, 197);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  gap: 20px;
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: black;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

export const Input = styled.input`
  display: flex;

  gap: 20px;
  width: 100%;
`;

export const ButtonForm = styled.button`
  background: blue;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;
export const TaskContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const TasckList = styled.li`
  border-bottom: 1px solid rgb(153, 152, 152);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const ButtonDelete = styled.button`
  background: red;
  border-radius: 4px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

export const ButtonDeleteAll = styled.button`
  background: red;
  border-radius: 4px;
  display: block;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
`;
