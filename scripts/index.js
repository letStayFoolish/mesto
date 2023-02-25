
// EDIT USERNAME AND USER OCCUPATION
const editProfileButton = document.querySelector('.profile__edit-btn');
const closeNewUserPopupButton = document.querySelector('.popup__close-btn_new_user');
const formNewUser = document.querySelector('.popup__form_new_user');
const popupNewUser = document.querySelector('.popup_new_user');

const popupInputUserName = document.querySelector('.popup__input_user_name');
const popupInputOccupation = document.querySelector('.popup__input_user_occupation');

const userNameElement = document.querySelector('.profile__user-name');
const userOccupationElement = document.querySelector('.profile__user-occupation');
// POPUP FORMS OPEN
const handleFormOpen = (item) => {
    item.classList.add('popup_opened');
};
// POPUP FORMS CLOSE
const handleFormClose = (item) => {
    item.classList.remove('popup_opened');
};
// POPUP NEW USER FORM OPEN
function handleNewUserFormOpen(evt) {
    handleFormOpen(popupNewUser);
    popupInputUserName.value = userNameElement.textContent;
    popupInputOccupation.value = userOccupationElement.textContent;
};
// POPUP NEW USER FORM CLOSE
function handleNewUserFormClose(evt) {
    handleFormClose(popupNewUser);
};
// POPUP NEW USER FORM SUBMIT
function handleFormSubmit(evt) {
    evt.preventDefault();
    userNameElement.textContent = popupInputUserName.value;
    userOccupationElement.textContent = popupInputOccupation.value;
    handleFormClose(popupNewUser);
};
// POPUP NEW USER FORM EVENTS
editProfileButton.addEventListener('click', handleNewUserFormOpen);
closeNewUserPopupButton.addEventListener('click', handleNewUserFormClose);
formNewUser.addEventListener('submit', handleFormSubmit);


// ADD PHOTOS TO GALLERY
const formNewItem = document.querySelector('.popup__form_new_item');
const popupNewItem = document.querySelector('.popup_new_item');
const addNewItemButton = document.querySelector('.profile__add-btn');
const closeNewItemPopupButton = document.querySelector('.popup__close-btn_new_item');
// NEW ITEM POPUP FORM OPEN
function handleNewItemFormOpen(evt) {
    handleFormOpen(popupNewItem);
};
// NEW ITEM POPUP FORM CLOSE
function handleNewItemFormClose(evt) {
    handleFormClose(popupNewItem);
};

// POPUP NEW ITEM FORM EVENTS
addNewItemButton.addEventListener('click', handleNewItemFormOpen);
closeNewItemPopupButton.addEventListener('click', handleNewItemFormClose);
// GALERY PLACES
const initialCards = [
    {
        imageName: 'Териберка',
        imageLink: 'https://unsplash.com/photos/utmKk7r_bz0',
    },
    {
        imageName: 'Байкал',
        imageLink: 'https://unsplash.com/photos/RlB6fvnaduc',
    },
    {
        imageName: 'Сахалин',
        imageLink: 'https://unsplash.com/photos/2_85zyiPHEM',
    },
    {
        imageName: 'Дагестан',
        imageLink: 'https://unsplash.com/photos/7ea_9cXwJVA',
    },
    {
        imageName: 'Мурманск город герой',
        imageLink: 'https://unsplash.com/photos/blXhzukdikg',
    },
    {
        imageName: 'Алтай',
        imageLink: 'https://unsplash.com/photos/am4mOl5h_EA',
    }
];

const cardHTML = `
<div class="card">
<img class="card__image" src="./images/1-Teriberka.jpg" alt="Териберка.">
<button type="button" class="card__remove-btn"></button>
<div class="card__info">
    <h2 class="card__title text">Териберка</h2>
    <button type="button" class="card__like-bttn"></button>
</div>
</div>
`;


