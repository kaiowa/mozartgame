<template>
  <div class="board">
    <div
      v-if="table"
      class="table"
    >
      <div
        v-for="(item,index) in table"
        :key="index"
        class="row"
      >
        <div class="cell title">
          {{ item.dice }}
        </div>
        <div
          v-for="(valor,index2) in item.options"
          :key="index2"
          :ref="getRef(item.dice,valor)"
          class="cell"
          :class="getActive(item.dice,valor)"
        >
          {{ valor }}
        </div>
      </div>
    </div>
  
    <div
      v-if="trios"
      class="table trios"
    >
      <div
        v-for="(itemTrio,index) in trios"
        :key="index"
        class="row"
      >
        <div class="cell title">
          {{ index+1 }}
        </div>
        <div
          v-for="(valor,index2) in itemTrio.options"
          :key="index2"
          :ref="getRefTrio(itemTrio.dice,valor)"
          class="cell"
          :class="getActiveTrio(itemTrio.dice,valor)"
        >
          {{ valor }}
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Board.js"></script>
<style lang="scss">
  @import "./Board.scss";
</style>
