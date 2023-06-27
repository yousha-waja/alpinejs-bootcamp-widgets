document.addEventListener("alpine:init", () => {
    Alpine.data('container', ()=>({

// Greet function
      visible1:false,
      message1:false,
      showButton1: false,
      answer1: '',
      name : '',

      hello() {
           this.answer1 = greet(this.name);
           this.message1=true;
           this.showButton1=true;
      },
      reset1(){
        this.message1 = false;
        this.showButton1 = false;
        this.name = '';
        this.answer1 = '';
      },

// Transport function
      visible2:false,
      message2:false,
      showButton2: false,
      shift:'',
      answer2:'',
      slot(){
        this.answer2 = transportFee(this.shift);
        this.message2 = true;
        this.showButton2=true;
      },

      reset2(){
        this.message2 = false;
        this.showButton2 = false;
        this.shift = ''; 
        this.answer2 = '';
      },

// Phone bill function
      visible3:false,
      message3:false,
      showButton3: false,
      bill:'',
      answer3:'',
      total(){
        this.answer3 = totalPhoneBill(this.bill);
        this.message3 = true;
        this.showButton3=true;
      },

      reset3(){
        this.message3 = false;
        this.showButton3 = false;
        this.bill = ''; 
        this.answer3 = '';
      },

// Airtime function
      visible4:false,
      message4:false,
      showButton4: false,
      airtime:'',
      data:'',
      answer4:'',
      isEnough(){
        this.answer4 = enoughAirtime(this.data,this.airtime);
        this.message4 = true;
        this.showButton4=true;
      },

      reset4(){
        this.message4 = false;
        this.showButton4 = false;
        this.airtime = ''; 
        this.data = '';
        this.answer4=''
      },

// Word game function
visible5:false,
message5:false,
showButton5: false,
word:'',
answer5:'',
longest(){
  this.answer5 = longestWord(this.word);
  this.message5 = true;
  this.showButton5=true;
},
shortest(){
  this.answer5 = shortestWord(this.word);
  this.message5 = true;
  this.showButton5=true;
},
wordCount(){
  this.answer5 = wordLength(this.word);
  this.message5 = true;
  this.showButton5=true;
},

reset5(){
  this.message5 = false;
  this.showButton5 = false;
  this.word = '';
  this.answer5=''
},

// Expensive Items function
itemList: [],
itemName: '',
itemQty: '',
over20: '',
threshold:'',
visible6:false,
message6:false,
message7:false,
showButton6: false,
answer6:'',
createdList:'',
overTwenty(){
  // Assign the itemList to createdList
  this.createdList = this.itemList;
  const items = findItemsOver20(this.createdList)
    .map(item => `<li>Item: ${item.name} - Quantity: ${item.qty}</li>`)
    .join('');
  this.answer6 = `<h4>Items with a count higher than 20:</h4><ol>${items}</ol>`;
  this.message6 = true;
  this.showButton6 = true;
  this.message6 = true;
  this.showButton6 = true;
},

overThreshold() {
  const items = findItemsOver(this.itemList, this.threshold)
    .map(item => `<li>Item: ${item.name} - Quantity: ${item.qty}</li>`)
    .join('');
  this.answer6 = `<h4>Items with a count higher than the threshold:</h4><ol>${items}</ol>`;
  this.message6 = true;
  this.showButton6 = true;
}
,
reset6(){
  this.message6 = false;
  this.showButton6 = false;
  this.answer6=''
}

    }));
  });