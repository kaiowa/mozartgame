import axios from 'axios';


// import NOTES from '@/data/keys.json';
import TABLE from '@/data/tablero.json';
import {generateNumbers} from '@/common/Utils';

let iClips = [
  {
    'dice':2,
    'options':[
      96,22,141,41,105,122,11,30,70,121,26,9,112,49,109,14
    ]
  },
  {
    'dice':3,
    'options':[
      32,6,128,63,146,46,134,81,117,39,126,56,174,18,116,83
    ]
  },
  {
    'dice':4,
    'options':[
      69,95,158,13,153,55,110,24,66,139,15,132,73,58,145,79
    ]
  },
  {
    'dice':5,
    'options':[
      40,17,113,85,161,2,159,100,90,176,7,34,67,160,52,170
    ]
  },
  {
    'dice':6,
    'options':[
      148,74,163,45,80,97,36,107,25,143,64,125,76,136,1,93
    ]
  },
  {
    'dice':7,
    'options':[
      104,157,27,167,154,68,118,91,138,71,150,29,101,162,23,151
    ]
  },
  {
    'dice':8,
    'options':[
      152,60,171,53,99,133,21,127,16,155,57,175,43,168,89,172
    ]
  },
  {
    'dice':9,
    'options':[
      119,84,114,50,140,86,169,94,120,88,48,166,51,115,72,111
    ]
  },
  {
    'dice':10,
    'options':[
      98,142,42,156,75,129,62,123,65,77,19,82,137,38,149,8
    ]
  },
  {
    'dice':11,
    'options':[
      3,87,165,61,135,47,147,33,102,4,31,164,144,59,173,78
    ]
  },
  {
    'dice':12,
    'options':[
      54,130,10,103,28,37,106,5,35,20,108,92,12,124,44,131
    ]
  }
];
// [72, 56, 75, 40, 83, 18],
// [6, 82, 39, 73, 3, 45],
// [59, 42, 54, 16, 28, 62],
// [25, 74, 1, 68, 53, 38],
// [81, 14, 65, 29, 37, 4],
// [41, 7, 43, 55, 17, 27],
// [89, 26, 15, 2, 44, 52],
// [13, 71, 80, 61, 70, 94],
// [36, 76, 9, 22, 63, 11],
// [5, 20, 34, 67, 85, 92],
// [46, 64, 93, 49, 32, 24],
// [79, 84, 48, 77, 96, 86],
// [30, 8, 69, 57, 12, 51],
// [95, 35, 58, 87, 23, 60],
// [19, 47, 90, 33, 50, 78],
// [66, 88, 21, 10, 91, 31]
let iTrios = [
  {
    'dice':1,
    'options':[72,6,59,25,81,41,89,13,36,5,46,79,30,95,19,66]
  },
  {
    'dice':2,
    'options':[56,82,42,74,14,7,26,71,76,20,64,84,8,35,47,88]
  },
  {
    'dice':3,
    'options':[75,39,54,1,65,43,15,80,9,34,93,48,69,58,90,21]
  },
  {
    'dice':4,
    'options':[40,73,16,68,29,55,2,61,22,67,49,77,57,87,33,10]
  },
  {
    'dice':5,
    'options':[83,3,28,53,37,17,44,70,63,85,32,96,12,24,50,91]
  },
  {
    'dice':6,
    'options':[18,45,62,38,4,27,52,94,11,92,24,86,51,60,78,31]
  }
];

const state = {
  status: {},
  table:TABLE,
  trios:iTrios,
  finishedGame:false
};
const actions = {
  playNote({dispatch,commit},data){
    commit('playNote',data);
  },
  startResetGame({dispatch,commit},data){
    //commit('startResetGame');
     //generateNumbers(tempTable);
  },
  generateDices({dispatch,commit},data){
    let tempTable=[];
    tempTable=Object.assign(tempTable, TABLE);
    return generateNumbers(iClips,iTrios);
    
  },
  playKey({dispatch,commit},data){
    console.log('Play key en store',data);
    commit('playKey',data);
  }
};

const getters = {
 
};

const mutations = {
  playNote(state,data){
    console.log(data)
  },
  generateDices(state,data){
  },
  startResetGame(state,data){
  },
  playKey(state,data){
  }

};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
