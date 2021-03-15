import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const Date = styled.Text`
  color: #fff;
  font-size: 17px;
`;

export const City = styled.Text`
  color: #0f0f0f;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Temp = styled.Text`
  color: #fff;
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 5px;
`;
