import { PropsWithRequiredChildren } from '@common/types';

import * as S from './styles';

const AuthLayout = ({ children }: PropsWithRequiredChildren) => (
  <S.AuthContainer>{children}</S.AuthContainer>
);

export default AuthLayout;
