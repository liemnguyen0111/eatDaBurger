const devoured = () => {
  axios.get('/api/burgers')
    .then(({data}) => {
      document.getElementById('devour').innerHTML = ''
      document.getElementById("devoured").innerHTML = "";
      data.forEach (item => {
          if (item.devoured) {
            let devourElem = document.createElement('li')
            devourElem.textContent = `
            ${item.burger_name}
            `
            document.getElementById('devoured').append(devourElem)
          }
          else {
            let devourElem = document.createElement('li')
            devourElem.textContent = `
            ${item.burger_name}
            `
            document.getElementById('burgers').append(devourElem)
          }
        }
      )
    })
    .catch(err => console.log(err))
}


document.addEventListener('click', e => {
  if (e.target.className === 'devour') {
    // console.log(e.target)
  axios.put(`/api/burgers/${e.target.dataset.id}`, {devoured: "1"})
    let devourElem = document.createElement('li')
  // console.log(e.target.value)
  devourElem.textContent = `
  ${e.target.value}
  `
  document.getElementById('devoured').append(devourElem)
  e.target.parentNode.remove()
  }
})

document.getElementById('addBurger').addEventListener('click', e => {
  axios.post('/api/burgers', {burger_name: document.getElementById('burgerName').value, devoured: 0})
  devoured()
})