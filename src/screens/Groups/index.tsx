import { StyleSheet, Text, View } from 'react-native';
import { Container} from './styles'
import { Header } from '@components/Header';
import { Hightlight } from '@components/Highlight';


export function Groups() {
  return (
    <Container>
      <Header/>
      <Hightlight
        title='Turmas'
        subtitle='Jogue com a sa turma'
      />
    </Container>
  );
}

