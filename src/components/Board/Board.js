

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
      debugger;
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
    updateCells(data){
      console.log(this.$refs);
      data.forEach((item)=>{
        console.log(item);
        debugger;
      })
    }
  }
 
};
