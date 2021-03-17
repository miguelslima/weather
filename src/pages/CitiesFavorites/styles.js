import { SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: #e8f0ff;
`;

export const BackButton = styled(TouchableOpacity)`
  flex-direction: row;
  margin-left: 15px;
  align-self: flex-start;
  align-items: center;
  margin: 15px;
`;
