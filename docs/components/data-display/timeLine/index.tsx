import React from 'react';
import { TimeLine } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame padding>
      <Block title="Basic" noTitlePadding>
        <TimeLine>
          <TimeLine.Item date={'07-18'} label={'发生时间'} time={'11:05:20'}>
            Create a services
          </TimeLine.Item>
          <TimeLine.Item date={'07-18'} label={'发生时间'} time={'11:05:20'}>
            Create a services
          </TimeLine.Item>
          <TimeLine.Item date={'07-18'} label={'发生时间'} time={'11:05:20'}>
            Create a services
          </TimeLine.Item>
        </TimeLine>
      </Block>
    </Frame>
  );
};
