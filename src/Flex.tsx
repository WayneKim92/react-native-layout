import React from 'react';
import { View, type ViewProps } from 'react-native';

import type { ViewStyle, FlexStyle } from 'react-native';
import type { EdgeInsets } from './EdgeInsets';

export interface FlexProps {
  direction?: 'column' | 'row';
  style?: ViewProps['style'];
  children?: React.ReactNode;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  flexGrow?: FlexStyle['flexGrow'];
  flexShrink?: FlexStyle['flexShrink'];
  flexBasis?: FlexStyle['flexBasis'];
  flexWrap?: FlexStyle['flexWrap'];
  edgeInsets?: EdgeInsets;
}

export function Flex(props: FlexProps) {
  const {
    direction = 'column',
    style,
    edgeInsets = {},
    justifyContent,
    alignItems,
    flexBasis,
    flexGrow,
    flexShrink,
    flexWrap,
    ...otherProps
  } = props;

  const viewStyle: ViewStyle = {
    flexDirection: direction,
    justifyContent,
    alignItems,
    flexBasis,
    flexGrow,
    flexShrink,
    flexWrap,
    ...edgeInsets,
  };

  return <View style={[viewStyle, style]} {...otherProps} />;
}
