

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
      // this.draw();
    }
  },
  data() {
    return {
      notas:[],
      totalTime:0,
      canvas:null,
      ctx:null,
      
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
    this.draw();
    var self=this;
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
      case 'game/playNote':
        
        self.drawNote(mutation.payload);
        break;
      }
    });
  },
  methods: {
    drawNote(nota){
      this.totalTime=this.totalTime+(parseFloat(nota.time)/1000);
      
      console.log('drawNote',this.totalTime);

      var radius = 1;

      this.ctx.beginPath();
      this.ctx.arc(this.totalTime, nota.velocity, radius, 0, 1 * Math.PI, false);
      this.ctx.fillStyle = 'green';
      this.ctx.fill();
      this.ctx.lineWidth = 5;
      this.ctx.strokeStyle = '#003300';
      this.ctx.stroke();

    },
    draw(){
     
      console.log('draw');
      // this.totalTime=this.notes[this.notes.length-1].time;
      this.totalTime=0;
      this.canvas=this.$refs.canvas;
      canvas.width = canvas.offsetWidth;
      this.ctx=canvas.getContext('2d');
      
      this.ctx.fillStyle = '#CFD8DC';
     
      this.ctx.strokeWidth=1;
      this.ctx.beginPath();
      for(let a=0;a<=20;a++){
       
        this.ctx.moveTo(0+(a*5),0);
        this.ctx.lineTo(0+(a*5), 20);
      }
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.moveTo(0,5);
      this.ctx.strokeWidth=1;
      this.ctx.lineTo(2000,5);
      this.ctx.stroke();

     
    
    }
    
  }
 
};
