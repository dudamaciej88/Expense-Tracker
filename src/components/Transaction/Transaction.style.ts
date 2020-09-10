import styled from "styled-components";

export const Li = styled.li`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  &.minus {
    border-right: 5px solid #c0392b;
  }
  &.plus {
    border-right: 5px solid #2ecc71;
  }
  &:hover .delete-btn {
    opacity: 1;
  }
  & > .delete-btn {
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
    }
    &:focus {
      outline: 0;
    }
  }
`;
