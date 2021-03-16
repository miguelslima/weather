import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  margin-left: ${({ vertical }) => (vertical ? "0" : "12px")};
  margin-top: ${({ vertical }) => (vertical ? "10px" : "0")};
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${({ vertical }) => (vertical ? "20px" : "10px")};
  padding-right: ${({ vertical }) => (vertical ? "20px" : "10px")};
  flex-direction: ${({ vertical }) => (vertical ? "row" : "column")};
  justify-content: ${({ vertical }) =>
    vertical ? "space-between" : "space-around"};
  align-items: center;
`;

export const Date = styled.Text`
  font-size: ${({ vertical }) => (vertical ? "18px" : "15px")};
`;

export const Temp = styled.View`
  flex-direction: ${({ vertical }) => (vertical ? "row" : "column")};
  align-items: center;
`;

export const TempMax = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: ${({ vertical }) => (vertical ? "10px" : "0")};
`;

export const Weekday = styled.Text`
  font-size: ${({ vertical }) => (vertical ? "18px" : "15px")};
`;
