<template>
  <div class="home">
    <!-- <Piano></Piano> -->
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
    <!-- <Visor :notes="notes"></Visor> -->
    <Piano />
  
  <!-- <div class="table" v-if="table">
    <div  class="row" v-for="(item,index) in table" :key="index">
        
        <div class="cell title">{{item.dice}}</div>
        <div class="cell title" v-for="(valor,index2) in item.options" :key="index2">
          {{valor}}
        </div>
    </div>

  </div> -->
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" scoped>
  @import "./Home.scss";
</style>
