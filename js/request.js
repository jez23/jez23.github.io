var request = new XMLHttpRequest() 
request.open("GET", "http://api.fixer.io/latest?base=GBP")
request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var responseJSON = JSON.parse(this.response)
        var rates = responseJSON.rates
        console.log(rates)
    }    
}
request.send()