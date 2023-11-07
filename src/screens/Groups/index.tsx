import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Container} from './styles'
import { Header } from '@components/Header';
import { Hightlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';


export function Groups() {
  const {groups, setGroups} = useState<string[]>(['lucas', 'aa'])
  return (
    <Container>
      <Header/>
      <Hightlight
        title='Turmas'
        subtitle='Jogue com a sua turma abcdefg'
      />

      <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <GroupCard 
              title={item}
              
            />
          )}
  //        contentContainerStyle={groups.length === 0 && {flex:1}}
          ListEmptyComponent={() => (
            <ListEmpty message="Nenhum item adicionado"/>
          )}
        />

    </Container>
  );
}

