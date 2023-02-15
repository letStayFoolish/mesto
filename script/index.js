const editProfileButton = document.querySelector('.profile__edit-bttn');
const closePopupButton = document.querySelector('.popup__close-bttn');
const submitButton = document.querySelector('.popup__submit-bttn');
const popup = document.querySelector('.popup');

const popupInputUserName = document.querySelector('.popup__input_user-name');
const popupInputOccupation = document.querySelector('.popup__input_user-occupation');

const userNameElement = document.querySelector('.profile__user-name');
const userOccupationElement = document.querySelector('.profile__user-occupation');

editProfileButton.addEventListener('click', function() {
    handleFormOpen(popup);
});

closePopupButton.addEventListener('click', function() {
    handleFormClose(popup);
});

submitButton.addEventListener('submit', function() {
    handleFormSubmit(popup);
});

function handleFormOpen(popupForm) {
    popupForm.classList.add('popup_opend');
    popupInputUserName.value = userNameElement.textContent;
    popupInputOccupation.value = userOccupationElement.textContent;
};

function handleFormClose(popupForm) {
    popupForm.classList.remove('popup_opend');
};

function handleFormSubmit(popupForm) {
    popupForm.preventDefault();
    userNameElement.textContent = popupInputUserName.value;
    userOccupationElement.textContent = popupInputOccupation.value;
    popupForm.classList.remove('popup_opend');
};