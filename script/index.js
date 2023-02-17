const editProfileButton = document.querySelector('.profile__edit-bttn');
const closePopupButton = document.querySelector('.popup__close-bttn');
const formElement = document.querySelector('.popup__form');
const popup = document.querySelector('.popup');

const popupInputUserName = document.querySelector('.popup__input_user_name');
const popupInputOccupation = document.querySelector('.popup__input_user_occupation');

const userNameElement = document.querySelector('.profile__user-name');
const userOccupationElement = document.querySelector('.profile__user-occupation');

function handleFormOpen(evt) {
    popup.classList.add('popup_opened');
    popupInputUserName.value = userNameElement.textContent;
    popupInputOccupation.value = userOccupationElement.textContent;
};

function handleFormClose(evt) {
    popup.classList.remove('popup_opened');
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    userNameElement.textContent = popupInputUserName.value;
    userOccupationElement.textContent = popupInputOccupation.value;
    handleFormClose();
};
editProfileButton.addEventListener('click', handleFormOpen);
closePopupButton.addEventListener('click', handleFormClose);
formElement.addEventListener('submit', handleFormSubmit);