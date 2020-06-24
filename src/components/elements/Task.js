import styled from "vue-styled-components";

const taskStatus = { finished: Boolean };

const Task = styled("div", taskStatus)`
  border: none;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  position: relative;
  background-color: ${(props) => (props.finished ? "#4baea0" : "#f1f0cf")};
  &:selected {
    border: none;
  }
`;

export default Task;
