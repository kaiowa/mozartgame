

import { mapState, } from 'vuex';
import pianoKeys from '@/data/piano_keys.json';
export default {
  name: 'board',
  components:{
  },
  props: {
    name: String,
  },
  data() {
    return {
      noteActive:{
        type:String
      },
      notes:pianoKeys
    };
  },
  watch:{
    noteActive(data){
      this.$refs[data][0].style.background='green';
      setTimeout(()=>{
        if(this.$refs[data][0].className.includes('is-black-key')){
          this.$refs[data][0].style.background='#000';
        }else{
          this.$refs[data][0].style.background='#fff';
        }
        
      },180);
      
    }
   
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
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
      case 'game/playNote':
        console.log(mutation);
        this.noteActive=mutation.payload.midiNote;
        break;
      }
    });
  },
  methods: {
    getIsBlack(data){
      return data.keyname.includes('S');
      
    },
    clickKey(data){
      console.log('click key data');
      this.$store.dispatch('game/playkey',data);
    }
  }
 
};
