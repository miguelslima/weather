import { FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e8f0ff;
`;

export const List = styled(FlatList)`
  margin-top: 10px;
  margin-right: 10px;
`;
