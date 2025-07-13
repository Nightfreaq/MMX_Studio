const navigation = document.querySelector('.navbar-collapse')

document.addEventListener('click', () => {
  if (navigation.classList.contains('show')){
  navigation.classList.remove('show')}
})

function rotate () {
  const arrow = document.querySelector(".bi-arrow-down")

  if(window.scrollY >= 600){
    arrow.style.rotate="180deg"
  } else{
    arrow.style.rotate ="0deg"
  }
}

window.addEventListener('scroll', rotate)