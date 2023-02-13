import { ref,onMounted} from "@vue/reactivity";

<template>

  <div id="composable">
    <div class="container">
      <h1>Color Picker Game</h1>
      <div class="color-display":style="{ backgroundColor: selectedColor }"></div>
      <div class="color-options">
      <div class="color-option" v-for="color in colors":key="color":style="{backroundColor: color}" @click="selectColor(color)">
      </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  setup() {
    const colors = ["red","green", "yellow", "blue", "purple","silver"];
    const selectedColor = ref("blue");

function colorSelection(color){
selectedColor.value = color;
}

    const colorSelection = (value) => {
      // A random color based on the array index;
      const randomNumber = Math.floor(Math.random() * 3) + 1; //between 1 - 4

      if (colors[randomNumber] === value) {
        message.value = `You win... [answer: ${colors[randomNumber]}]`;
        return;
      }

      message.value = `You loose [answer: ${colors[randomNumber]}]`;
    };

    return { colors, selectedColor, colorSelection };
  },
};
</script>

<style>
#composable {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 600px;
  margin: 50px auto;
}

.color-display {
  height: 200px;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.color-options {
  display: flex;
  flex-wrap: wrap;
}

.color-option {
  height: 50px;
  width: 25%;
  cursor: pointer;
}
</style>