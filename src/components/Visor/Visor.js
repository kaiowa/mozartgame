

import { mapState, } from 'vuex';
export default {
  name: 'visor',
  components:{
  },
  props: {
    notes: {
      type:Array
    },
  },
  computed: {
    ...mapState({
      table:state => state.game.table
    })
  },
  watch:{
    notes(data){
      this.draw()
    }
  },
  data() {
    return {
      notas:[],
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
    console.log('created visor');

    // let  canvas = this.$refs
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 150);
// ctx.stroke();
  },

  mounted() {
    
  },
  methods: {
   draw(){
     console.log('draw');
     this.totalTime=this.notes[this.notes.length-1].time;
     let canvas=this.$refs.canvas;
     let ctx=canvas.getContext("2d");
     ctx.fillStyle = '#CFD8DC';
     
     ctx.strokeStyle = "#000";
     ctx.beginPath();
      for(let a=0;a<=850;a++){
        ctx.moveTo(0+(a*5),0);
        ctx.lineTo(0+(a*5), 400);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
      ctx.moveTo(0,5);
      ctx.lineTo(2000,5);
      ctx.stroke();

     
    
   }
    
  }
 
};
