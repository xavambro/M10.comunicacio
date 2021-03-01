import Fill from '../components/Fill'

export default {
  name: 'Pare',
  components:{
      Fill
  },
  data(){
     return{
         items:[{name:'item1',counter:0},
                {name:'item2',counter:0},
                {name:'item3',counter:0}] 
     } 
  }
}