import * as React from 'react';

import { Text } from 'react-native';
import { Column, Row, Spacer } from 'react-native-layout';
import { EdgeInsets } from '../../src/EdgeInsets';

export default function App() {
  return (
    <Column justifyContent={'space-between'} flexGrow={1} edgeInsets={EdgeInsets.all(50)}>
      <Row justifyContent={'space-between'}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </Row>
      <Row>
        <Text>Hello</Text>
        <Spacer flex={1}/>
        <Text>Hello</Text>
        <Spacer size={10}/>
        <Text>Hello</Text>
      </Row>
      <Row>
        <Text>Hello</Text>
        <Spacer size={10}/>
        <Text>Hello</Text>
        <Spacer flex={1}/>
        <Text>Hello</Text>
      </Row>
    </Column>
  );
}
