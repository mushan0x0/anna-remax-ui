import React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('time_line');

export interface TimeLineProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const TimeLine = (props: TimeLineProps) => {
  const { className, style, children } = props;

  const classes = classNames(prefixCls, {}, className);

  return (
    <View className={classes} style={style}>
      {children}
    </View>
  );
};

export interface TimeLineItemProps extends TimeLineProps {
  label?: React.ReactNode;
  date?: React.ReactNode;
  time?: React.ReactNode;
}

TimeLine.Item = (props: TimeLineItemProps) => {
  const { className, style, label, children, date, time } = props;

  const classes = classNames(`${prefixCls}-item`, {}, className);
  const childrenCls = classNames(`${classes}-children`);
  const dateCls = classNames(`${classes}-date`);
  const dateLabelCls = classNames(`${dateCls}-label`);
  const dateTimeCls = classNames(`${dateCls}-time`);

  return (
    <View className={classes} style={style}>
      <View className={dateCls}>
        <View className={dateLabelCls}>{label}</View>
        {date}
        <View className={dateTimeCls}>{time}</View>
      </View>
      <View className={childrenCls}>{children}</View>
    </View>
  );
};

export default TimeLine;
