import Piano from '@/components/Piano';
import Board from '@/components/Board';
import Visor from '@/components/Visor';

import { Midi } from '@tonejs/midi';
import axios from 'axios';

// Midi.fromUrl=function(url){
//   debugger;
//   axios.get(url).then((data)=>{
//     console.log(data);
//   });

//   // const response = await fetch(url);
//   // if (response.ok) {
//   //   const arrayBuffer = await response.arrayBuffer();
//   //   return new Midi(arrayBuffer);
//   // } else {
//   //   throw new Error(`could not load ${url}`);
//   // }
// }

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
    Visor
  },
  computed: {
    ...mapState({
      table:state => state.game.table
    })
  },
  data() {
    return {
      activeCells:[],
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
      soundfontUrl: "/libs/soundfont/",
      instrument:"acoustic_grand_piano",
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
          this.activeCells=data;
      });
    },
    getTrackFile(){
      // return require('!file-loader@/assets/midi/bach_846.mid');
    },
    async extractTrack(){
      

     
      // const midi = await Midi.fromUrl('http://localhost:8080/public/midi/nuvole.mid')
      // //the file name decoded from the first track
      // const name = midi.name;
      // console.log(midi);
      // //get the tracks
      // midi.tracks.forEach(track => {
      //   //tracks have notes and controlChanges
      
      //   //notes are an array
      //   const notes = track.notes
      //   notes.forEach(note => {
      //     //note.midi, note.time, note.duration, note.name
      //   })
      
      //   //the control changes are an object
      //   //the keys are the CC number
      //   track.controlChanges[64]
      //   //they are also aliased to the CC number's common name (if it has one)
      //   track.controlChanges.sustain.forEach(cc => {
      //     // cc.ticks, cc.value, cc.time
      //   })
      
      //   //the track also has a channel and instrument
      //   //track.instrument.name
      // })
    }
  }
};
