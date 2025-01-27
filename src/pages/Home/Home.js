import Piano from '@/components/Piano';
import Board from '@/components/Board';
import Visor from '@/components/Visor';
import Header from '@/components/Header';

import axios from 'axios';

import { mapState, } from 'vuex';
export default {
  metaInfo: {
    title: 'HOme ddd',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
  },
  name: 'home',
  components: {
    Piano,
    Board,
    Visor,
    Header
  },
  computed: {
    ...mapState({
      table:state => state.game.table
    })
  },
  data() {
    return {
      activeCells:[],
      activeCellsTrios:[],
      notes:[]
    };
  },
  created(){
    console.log('created home');
  },
  mounted() {
    console.log('mounted home');
    //  this.$store.dispatch('game/startResetGame');
    // this.extractTrack();
    // let fichero=require('@/assets/midi/bach_846.mid');
    window.onload = function () {
      MIDI.loadPlugin({
        soundfontUrl: '/libs/soundfont/',
        instrument:'acoustic_grand_piano',
        onprogress: function(state, progress) {
        },
        onsuccess: function() {
          var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
          console.log('sucesssssssssssss');
          var delay = 0; // play one note every quarter second
          var note = 50; // the MIDI note
          var velocity = 127; // how hard the note hits
          // play the note
          MIDI.setVolume(0, 127);
          MIDI.noteOn(0, note, velocity, delay);
          MIDI.noteOff(0, note, delay + 0.75);
        }
      });
    };

  },
  methods:{
    updateNotes(notas){
      console.log(notas.length);
      this.notes=[];
      this.notes=notas;
    },
    generateDices(){
      this.$store.dispatch('game/generateDices').then((data)=>{
        console.log('results',data);
        this.activeCells=data.minus;
        this.activeCellsTrios=data.trios;
      });
    },
    getTrackFile(){
      // return require('!file-loader@/assets/midi/bach_846.mid');
    }
    
  }
};
