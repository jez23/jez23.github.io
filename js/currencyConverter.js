function CurrencyConverter () {
    this._rates = {}

}


CurrencyConverter.prototype = {
  getRates: function () {
      return this._rates
  },
  setRates: function (rates){
      this._rates = rates
      return 
  }
}

