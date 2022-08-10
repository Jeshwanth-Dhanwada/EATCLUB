let input = document.getElementById('search')
let btn = document.getElementById('locate')

btn.addEventListener('click',()=>{
          window.open(input.value, '_blank')
})