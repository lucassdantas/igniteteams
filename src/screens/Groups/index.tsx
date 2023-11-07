import { StyleSheet, Text, View } from 'react-native';
import { Container} from './styles'
import { Header } from '@components/Header';
import { Hightlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';


export function Groups() {
  return (
    <Container>
      <Header/>
      <Hightlight
        title='Turmas'
        subtitle='Jogue com a sua turma abcdefg'
      />

    <GroupCard title='teste'/>
    </Container>
  );
}

