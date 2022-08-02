class Wallet {
 constructor(money) {
  let _money = money;
  //check the current balance of the wallet
  
  this.getWalletValue = () => _money;

  //Checking whether the user has the right amount of funds

  this.checkCanPlay = value => {
   if (_money >= value) return true;
   return false;
  }

  this.changeWallet = (value, type = "+") => {
   if (typeof value === "number" && !isNaN(value)) {
    if (type === "+") {
     return _money += value;
    } else if (type === "-") {
     return _money -= value;
    } else {
     throw new Error("invalid type of operation")
    }

   } else {
    console.log(typeof value);
    throw new Error("invalid number")
   }
  }

 }

}

// const wallet = new Wallet(200)