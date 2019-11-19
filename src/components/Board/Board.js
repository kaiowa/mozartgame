

import { mapState, } from 'vuex';
export default {
  name: 'board',
  components:{
  },
  props: {
    activeCells: {
      type:Array
    },
  },
  computed: {
    ...mapState({
      table:state => state.game.table
    })
  },
  watch:{
    activeCells(data){
      this.updateCells(data)
    }
  },
  data() {
    return {
      tracks:[],
      notes:[],
      totalTime:0
    };
  },
  // computed: {
  //   ...mapState({
  //     casillas:state => state.player.cells,
  //     TotalShows:state=>state.player.TotalShows,
  //     TotalOk:state => state.player.TotalOk,
  //     scores:state => state.player.scores,
  //     finished:state =>state.player.finishedGame
  //   }),
    
  // },
  
  created(){
    console.log('created piano');
    
  },

  mounted() {
    
  },
  methods: {
    getActive(dice,valor){
      
      if(!this.activeCells.length || this.activeCells.length==0){
        return ''
      }else{
         let activo=this.activeCells.find((item)=>{
            return item.dice===dice && item.value===valor
          });
        return activo? 'active': '';
      }
     
    },
    getRef(dice,valor){
      return dice+'_'+valor;
    },
    extractTrack(data,index){
      
      
      var self=this;

      data[0].forEach((item)=>{

        if(item.subtype==='noteOn' || item.subtype==='noteOff'){
          console.log(item);
          this.totalTime=this.totalTime+parseFloat(item.deltaTime);
          if(item.subtype==='noteOn'){
            let nota={
              'subtype':item.subtype,
              'noteOn':item.noteNumber,
              'time':this.totalTime
            }
            self.notes.push(nota);
          }else{
            let nota={
              'subtype':item.subtype,
              'noteOff':item.noteNumber,
              'time':this.totalTime
            }
            self.notes.push(nota);
          }
         
        }
      });
    },
    updateCells(data){
      console.log('Ficheros melodia');
      var self=this;
      data.forEach((item,index)=>{
        
        let fichero="/files/M"+item.value+".mid";
        console.log(fichero);
        loadRemote(fichero, function (data) {
            
            self.midiFile = MidiFile(data, 1);
            self.synth = Synth(44100);
        
            self.extractTrack(self.midiFile.tracks,index);
        });
      });
      setTimeout(()=>{
        console.log('notas',this.notes);
        this.notes.sort(function (a, b) {
          return a.time - b.time;
        });
        MIDI.setVolume(0, 127);
        this.notes.forEach((note)=>{

            setTimeout(()=>{
              var delay = 0; // play one note every quarter second
              
              var velocity = 127; // how hard the note hits
              // play the note
              if(note.subtype=='noteOn'){
                MIDI.noteOn(0, note.noteOn, velocity, delay);
              }
             
              
            },note.time)
        });

      },3000)
      

    }
  }
 
};
