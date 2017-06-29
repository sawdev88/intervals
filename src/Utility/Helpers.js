const colors = [
  '#2DD4FF',
  '#fb9062',
  '#a8adf5',
  '#d4434a',
  '#8cc1a5',
  '#6cb6bd',
  '#767689'
]

export function randomColorPicker() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

export function slideIn(ele, end, duration) {
  Animated.timing(
    ele,
    {
      toValue: end,
      duration: duration,
      easing: Easing.easeInOutCubic
    }
  ).start()
}
