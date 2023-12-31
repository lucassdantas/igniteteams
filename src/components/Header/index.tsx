import { Container, Logo, BackButton} from './styles'
import logoImg from '@assets/logo.png'
import { Text } from 'react-native';


type Props = {
    showBackButton?: boolean;
}
export function Header({showBackButton = false}:Props) {
  return (
    <Container>
        {
            showBackButton &&
            <BackButton>
               {/* <BackIcon/>*/}
            </BackButton>
        }
        <Logo source={logoImg}/>
    </Container>
  );
}

