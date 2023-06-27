function addItem() {
    this.itemList.push({ name: this.itemName, qty: this.itemQty });
    this.itemName = '';
    this.itemQty = '';
  }

  function findItemsOver20(list) {
    return list.filter(item => item.qty > 20);
  }

  // Function to find items with quantity over a specified threshold
  function findItemsOver(list, threshold) {
    let answer = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].qty > threshold) {
        answer.push(list[i]);
      }
    }
    return answer;
  }