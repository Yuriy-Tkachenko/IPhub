const buttonClose = document.querySelector('.page-header__button-close');
const buttonOpen = document.querySelector('.page-header__button-open');
const navigation = document.querySelector('.site-navigation');

navigation.classList.remove('site-navigation-no--js');
buttonClose.classList.add('button-disable');
buttonOpen.classList.remove('button-disable');

buttonOpen.addEventListener('click', function () {
  if (navigation.classList.contains('site-navigation--closed')) {
    navigation.classList.remove('site-navigation--closed');
    buttonOpen.classList.add('button-disable');
    buttonClose.classList.remove('button-disable');
  }
})

buttonClose.addEventListener('click', function() {
  navigation.classList.add('site-navigation--closed');
  buttonOpen.classList.remove('button-disable');
  buttonClose.classList.add('button-disable');
})