<template>
  <div class="piano">
    {{ noteActive }}
    <ul
      v-if="notes"
      class="keys"
    >
      <div
        v-for="(note,index) in notes"
        :ref="note.keyname"
        :key="index"
        class="piano-key"
        :class="{'is-black-key': getIsBlack(note), 'is-playing': false}"
      />
    </ul>

    <!-- <div id="keyboard" >
      <div class="key white c" ref="C3" data-note="C3" style="background-color: rgb(203, 203, 203);"></div>
      <div class="key black c_sharp" ref="C#3" data-note="C#3"></div>
      <div class="key white d" ref="D3" data-note="D3" style="background-color: rgb(203, 203, 203);"></div>
      <div class="key black d_sharp" ref="D#3" data-note="D#3"></div>
      <div class="key white e" ref="E3" data-note="E3" style="background-color: rgb(203, 203, 203);"></div>
      <div class="key white f" ref="F3" data-note="F3" style="background-color: rgb(203, 203, 203);"></div>
      <div class="key black f_sharp" ref="F#3" data-note="F#3" style="background-color: rgb(34, 34, 34);"></div>
      <div class="key white g" ref="G3" data-note="G3"></div>
      <div class="key black g_sharp" ref="G#3" data-note="G#3" style="background-color: rgb(34, 34, 34);"></div>
      <div class="key white a" ref="A3" data-note="A3"></div>
      <div class="key black a_sharp" ref="A#3" data-note="A#3" style="background-color: rgb(34, 34, 34);"></div>
      <div class="key white b" ref="B3" data-note="B3"></div>
      <div class="key white c" ref="C4" data-note="C4" style="background-color: rgb(203, 203, 203);"></div>
      <div class="key black c_sharp" ref="" data-note="C#4"></div>
      <div class="key white d" ref="D4" data-note="D4" style="background-color: rgb(203, 203, 203);"></div>
      <div class="key black d_sharp" ref="C#4" data-note="D#4"></div>
      <div class="key white e" ref="E4" data-note="E4"></div>
      <div class="key white f" ref="F4" data-note="F4"></div>
      <div class="key black f_sharp" ref="F#4" data-note="F#4"></div>
      <div class="key white g" ref="G4" data-note="G4"></div>
      <div class="key black g_sharp" ref="G#4" data-note="G#4"></div>
      <div class="key white a" ref="A4" data-note="A4"></div>
      <div class="key black a_sharp" ref="A#4" data-note="A#4"></div>
      <div class="key white b" ref="B4" data-note="B4"></div>
      <div class="key white c" ref="C5" data-note="C5"></div>
      <div class="key black c_sharp" ref="C#5" data-note="C#5"></div>
      <div class="key white d" ref="D5" data-note="D5"></div>
      <div class="key black d_sharp" ref="D#5" data-note="D#5"></div>
      <div class="key white e" ref="E5" data-note="E5"></div>
      <div class="key white f" ref="F5" data-note="F5"></div>
      <div class="key black f_sharp" ref="F#5" data-note="F#5"></div>
      <div class="key white g" ref="G5" data-note="G5"></div>
      <div class="key black g_sharp" ref="G#5" data-note="G#5"></div>
      <div class="key white a" ref="A5" data-note="A5" style="background-color: rgb(203, 203, 203);"></div>
      <div class="key black a_sharp" ref="A#5" data-note="A#5"></div>
      <div class="key white b" ref="B5" data-note="B5" style="background-color: rgb(203, 203, 203);"></div>
    </div> -->
  </div>
</template>
<script src="./Piano.js"></script>
<style lang="scss">
  @import "./Piano.scss";
</style>
