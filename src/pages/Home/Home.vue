<template>
  <div class="home">
  <Header></Header>
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
    
  <Piano />
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" scoped>
  @import "./Home.scss";
</style>
