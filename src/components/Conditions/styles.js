import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;

export const BorderTop = styled.View`
  width: 50%;
  border-right-width: 1px;
  border-right-color: #fff;
`;

export const Condition = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ConditionTop = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;

  border-bottom-width: 1px;
  border-bottom-color: #fff;
`;

export const ConditionText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
