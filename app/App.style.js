import styled from 'styled-components/native';

const SafeAreaViewSt = styled.SafeAreaView`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonTouchableOpacitySt = styled.TouchableOpacity`
  border: 1px solid orange;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export { SafeAreaViewSt, ButtonTouchableOpacitySt };
