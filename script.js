let input=document.getElementById('input')
let expression=''

function fun(x){
    expression=expression + x
    input.value=expression
}

function funEqual(){
    expression=eval(expression)
    input.value=expression
}

function funClear(){
    expression=null
    input.value=expression
}

let a = document.getElementsByTagName('button')
addEventListener('mouseover',()=>{
    document.body.style.background='black'
})
addEventListener('mouseout',()=>{
    document.body.style.background='pink'
})