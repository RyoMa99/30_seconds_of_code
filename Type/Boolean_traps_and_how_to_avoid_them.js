
// オブジェクトでデフォルト引数を渡す
function saySomething({msg = 'hello'} = {}){
  return msg
}
console.log(saySomething())
console.log(saySomething({msg:'Bye'}))