import { PropsWithRequiredChildren } from '@common/types';

import * as S from './styles';

const PrivateLayout = ({ children }: PropsWithRequiredChildren) => (
  <S.DefaultContainer>{children}</S.DefaultContainer>
);

export default PrivateLayout;
