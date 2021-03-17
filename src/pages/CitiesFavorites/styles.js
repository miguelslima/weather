import { SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: #e8f0ff;
`;

export const BackButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin-left: 15px;
  align-self: flex-start;
  align-items: center;
  margin: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CityContainer = styled.View`
  margin: 10px;
  padding: 10px;
  background-color: transparent;
  border-radius: 10px;

  border: 1px solid #aaa;
`;

export const CityContainerTop = styled.View`
  width: 150px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;
