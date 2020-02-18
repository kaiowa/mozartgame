<template>
  <div class="home">
    <!-- <Header /> -->
    <section class="seccion_principal">
      <Board
        :active-cells="activeCells"
        :active-cells-trios="activeCellsTrios"
        @updateNotes="updateNotes"
      />
      <button @click="generateDices()">
        Generate dices
      </button>
    </section>
    <!-- <Visor></Visor> -->
    <Piano />
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" scoped>
  @import "./Home.scss";
</style>
