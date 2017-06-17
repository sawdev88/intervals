const colors = [
  '#2DD4FF',
  '#fb9062',
  '#a8adf5',
  '#d4434a',
  '#8cc1a5',
  '#6cb6bd',
  '#767689'
]

export function RandomColorPicker() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}
