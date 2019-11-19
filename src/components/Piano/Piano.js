

import { mapState, } from 'vuex';
export default {
  name: 'board',
  components:{
  },
  props: {
    name: String,
  },
  data() {
    return {
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
   
    clickKey(data){
      console.log('click key data');
      this.$store.dispatch('game/playkey',data);
    }
  }
 
};
