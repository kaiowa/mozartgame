<template>
  <div class="board">
{{activeCells}}
  <div class="table" v-if="table">
    <div  class="row" v-for="(item,index) in table" :key="index">
        <div class="cell title">{{item.dice}}</div>
        <div class="cell" v-for="(valor,index2) in item.options" :key="index2" :ref="getRef(item.dice,valor)" :class="getActive(item.dice,valor)">
          {{valor}}
        </div>
    </div>

  </div>
<br>
{{trios}}
   <div class="table" v-if="trios">
    <div  class="row" v-for="(itemTrio,index) in trios" :key="index">
        <div class="cell title">{{index+1}}</div>
        <div class="cell" v-for="(valor,index2) in itemTrio.options" :key="index2" :ref="getRefTrio(itemTrio.dice,valor)" :class="getActiveTrio(itemTrio.dice,valor)">
          {{valor}}
        </div>
    </div>

  </div>
  </div>
</template>
<script src="./Board.js"></script>
<style lang="scss">
  @import "./Board.scss";
</style>
