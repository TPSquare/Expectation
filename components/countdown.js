import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const GapChild = ({ value, text }) => (
  <View style={styles.gapChildWrapper}>
    <Text style={[styles.gapChild, styles.gapChildTop]}>{value}</Text>
    <Text style={styles.gapChild}>{text}</Text>
  </View>
);

export default () => {
  const title = 'Thi HSG cấp tỉnh';
  const target = new Date(2025, 2, 18, 6, 0, 0, 0);

  const getGap = () => {
    let miliSeconds = target - new Date();
    let seconds = Math.floor(miliSeconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return { days, hours, minutes, seconds };
  };

  const [gap, updateGap] = useState(getGap());
  useEffect(() => {
    const interval = setInterval(() => updateGap(getGap()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.top}>Đếm ngược</Text>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.gapParent}>
        <GapChild value={gap.days} text="ngày" />
        <GapChild value={gap.hours} text="giờ" />
        <GapChild value={gap.minutes} text="phút" />
        <GapChild value={gap.seconds} text="giây" />
      </View>
    </View>
  );
};

const styleConfigs = {
  textColor: '#ffffff',
  gapChildMargin: 10,
};
const styles = new StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: { color: styleConfigs.textColor, fontFamily: 'Anton', fontSize: 20 },
  title: {
    color: styleConfigs.textColor,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 30,
  },
  gapParent: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: styleConfigs.gapChildMargin,
  },
  gapChildWrapper: {
    alignItems: 'center',
    marginRight: styleConfigs.gapChildMargin,
  },
  gapChild: {
    color: styleConfigs.textColor,
    fontFamily: 'Arial',
    fontSize: 12,
  },
  gapChildTop: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});
