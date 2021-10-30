import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { ImageDescription } from '../../components/ImageDescription';
import RecoverPasswordForm from '../../components/RecoverPasswordForm';

import * as S from '../../styles/pages/login/styles';

export default function LoginScreen() {
  return (
    <S.LoginContainer>
      <ImageDescription />
      <RecoverPasswordForm />
    </S.LoginContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['achapet.user']: user } = parseCookies(ctx);

  if (user) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
