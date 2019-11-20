<template>
<div class="home">
  <!-- <Piano></Piano> -->
  
  <Board :activeCells="activeCells" @updateNotes="updateNotes"></Board>
  <button @click="generateDices()">Generate dices</button>
  <Visor :notes="notes"></Visor>
  <!-- <Piano></Piano> -->
  
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
