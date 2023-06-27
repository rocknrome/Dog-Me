const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

const getBreeds = async () => {
    const dogbreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(dogbreeds.data.message)
  }

  getBreeds()

button.addEventListener('click', async () => {
    let breed = breedInput.value
    let response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      )
      let dogPic = response.data.message
      imageDiv.innerHTML = `<img src=${dogPic}>`

})
