import { ref } from 'vue';

export default function ColorPicker() {
  const colors = ['green', 'red', 'blue', 'purple'];
  const message = ref('Pick a color...');

  const matchColor = (value) => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    colors[randomIndex] === value
      ? (message.value = `You win... [answer: ${colors[randomIndex]}]`)
      : (message.value = `You lose [answer: ${colors[randomIndex]}]`);
  };
  return { colors, message, matchColor };
}
