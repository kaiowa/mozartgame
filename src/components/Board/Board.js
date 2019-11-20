

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
    extractTrack(data,index,fichero){
      
      var self=this;
      
      let microAcumulado = 0;
      let primeraNota=false;
      data[0].forEach((item,index)=>{
        let notaTemp={};
        
        // this.totalTime=this.totalTime+parseFloat(item.deltaTime);
        if(item.subtype==='noteOn' || item.subtype==='noteOff'){

          if ( primeraNota == 0) {
            this.totalTime = this.totalTime + microAcumulado;
            notaTemp.tiempo = this.totalTime;
  
          } else {
            this.totalTime = this.totalTime + item.deltaTime;
            notaTemp.tiempo = this.totalTime;
          }
          primeraNota=1;
          
          item.totalTime=notaTemp.tiempo;
          item.fichero=fichero;
          // this.totalTime=this.totalTime+parseFloat(item.deltaTime);
          if(item.subtype==='noteOn'){
            let nota={
              'subtype':item.subtype,
              'noteOn':item.noteNumber,
              'time':item.totalTime,
              'fichero':item.fichero
            }
            self.notes.push(nota);
          }else{
            let nota={
              'subtype':item.subtype,
              'noteOff':item.noteNumber,
              'time':item.totalTime,
              'fichero':item.fichero
            }
            self.notes.push(nota);
          }
         
        }
      });
    },
    loadMidiFile(fichero,orderFichero){
      let _this=this;
      return  new Promise(function (resolve, reject) {
        loadRemote(fichero, function (data) {
          _this.midiFile = MidiFile(data, 1);
          _this.synth = Synth(44100);
          let itemTrack={
            "orderFichero":orderFichero,
            "notes":_this.midiFile.tracks[0]
          }
          _this.tracks.push(itemTrack);
          resolve(true);
        });
      });
    },
    createNotes(){
        let self=this;
        this.totalTime=0;
        this.notes=[];
        this.tracks.forEach((ctrack,index)=>{

          let fichero=ctrack.orderFichero;
          let microAcumulado = 0;
          let primeraNota=false;
          ctrack.notes.forEach((item,index)=>{

            let notaTemp={};
            if(item.subtype==='noteOn' || item.subtype==='noteOff'){
    
              if ( primeraNota == 0) {
                this.totalTime = this.totalTime + microAcumulado;
                notaTemp.tiempo = this.totalTime;
      
              } else {
                this.totalTime = this.totalTime + item.deltaTime;
                notaTemp.tiempo = this.totalTime;
              }
              primeraNota=1;
              
              item.totalTime=notaTemp.tiempo;
              item.fichero=fichero;
              // this.totalTime=this.totalTime+parseFloat(item.deltaTime);
              if(item.subtype==='noteOn'){
                let nota={
                  'subtype':item.subtype,
                  'noteOn':item.noteNumber,
                  'time':item.totalTime,
                  'fichero':item.fichero
                }
                self.notes.push(nota);
              }else{
                let nota={
                  'subtype':item.subtype,
                  'noteOff':item.noteNumber,
                  'time':item.totalTime,
                  'fichero':item.fichero
                }
                self.notes.push(nota);
              }
             
            }
          });
           
          });
        console.log('NOtas Generadas',this.notes);
        this.$emit('updateNotes',this.notes);
    },
    updateCells(data){
      this.totalTime=0;
      this.tracks=[];
      console.log('Ficheros melodia');
      var self=this;
      let arrayPromises=[];
      data.forEach((item,index)=>{
        
        let fichero="/files/M"+item.value+".mid";
        console.log(fichero);
        arrayPromises.push(this.loadMidiFile(fichero,index));
      });
      Promise.all(arrayPromises).then((data)=>{
          console.log('TODOS LOS FICHEROS PARSEADOS');
          self.tracks.sort(function(a,b){
            return a.orderFichero - b.orderFichero
          });
          console.log(self.tracks);
          self.createNotes();
      });
      // setTimeout(()=>{
      //   console.log('notas',this.notes);
      //    this.notes.sort(function (a, b) {
      //      return a.time - b.time;
      //    });
      //   MIDI.setVolume(0, 127);
      //   this.notes.forEach((note)=>{

      //       setTimeout(()=>{
      //         var delay = 0; // play one note every quarter second
              
      //         var velocity = 127; // how hard the note hits
      //         // play the note
      //         if(note.subtype=='noteOn'){
      //           MIDI.noteOn(0, note.noteOn, velocity, delay);
      //         }
             
              
      //       },note.time)
      //   });

      // },3000)
      

    }
  }
 
};
