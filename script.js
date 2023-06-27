// cached UI Variables
const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')


//Function
const getBreeds = async () => {
    try {
      const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all');
      console.log(dogBreeds.data.message);
    } catch (error) {
      console.error('Error fetching dog breeds:', error);
    }
  };

  getBreeds()

//Event listener
button.addEventListener('click', async () => {
    let breed = breedInput.value
    let response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      )
      let dogPic = response.data.message
      imageDiv.innerHTML = `<img src=${dogPic}>`

})
