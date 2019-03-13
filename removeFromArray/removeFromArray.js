const removeFromArray = function(...args) {

    var array = args[0];

    function verificar(val){
      return !args.includes(val);
    }
    return array.filter(verificar);

}

module.exports = removeFromArray
