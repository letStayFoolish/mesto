
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
// ---------------------------------------------------------------------------

// ADD PHOTOS TO GALLERY
const formNewItem = document.querySelector('.popup__form_new_item');
const popupNewItem = document.querySelector('.popup_new_item');
const openNewItemButton = document.querySelector('.profile__add-btn');
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
openNewItemButton.addEventListener('click', handleNewItemFormOpen);
closeNewItemPopupButton.addEventListener('click', handleNewItemFormClose);

// GALERY PLACES
const initialCards = [
    {
        name: 'Териберка',
        link: 'https://images.unsplash.com/photo-1606841599773-7307a2b5ce34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=953&q=80'
    },
    {
        name: 'Байкал',
        link: 'https://images.unsplash.com/photo-1676466920684-5d1aae90c9c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Сахалин',
        link: 'https://images.unsplash.com/photo-1662953594079-a43b3767aca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Дагестан',
        link: 'https://images.unsplash.com/photo-1652716456950-0c1d6e1433cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Мурманск город герой',
        link: 'https://images.unsplash.com/photo-1615924631431-3a5c33d767d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        name: 'Алтай',
        link: 'https://images.unsplash.com/photo-1643281237857-5f14c2b9f3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
];
// ADD NEW IMAGES TO GALERY
// const popupInputImageName = document.querySelector('.popup__input_image_name');
// const popupInputImageLink = document.querySelector('.popup__input_image_link');

// const handleFormNewItemSubmit = (event) => {
//     event.preventDefault();
//     handleFormClose(popupNewItem);
//     const newImage = {name: popupInputImageName.value, link: popupInputImageLink.value};
//     initialCards.unshift(newImage);
//     placesContainer.append(newImage);
// };
// formNewItem.addEventListener('submit', handleFormNewItemSubmit);
// -----------------------------------------------------------------------------
const placesContainer = document.querySelector('.places');

// CREATE NEW CARDS
function createNewCard(newName, newLink) {
    const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
    const cardElementHeading = newCard.querySelector('.card__title');
    const cardElementImage = newCard.querySelector('.card__image');

    cardElementHeading.textContent = newName;
    cardElementImage.setAttribute('src', newLink);
// ADD LIKE ONTO IMAGES
    const imageLikeButton = newCard.querySelector('.card__like-btn');
    const puttLike = () => {
        imageLikeButton.classList.toggle('card__like-btn_active');
    };
    imageLikeButton.addEventListener('click', puttLike);
// REMOVE CARDS
    const removeImageButton = newCard.querySelector('.card__remove-btn');
    const removeImage = () => {
        const cardContainer = removeImageButton.closest('.card');
        cardContainer.remove();
    };
    removeImageButton.addEventListener('click', removeImage);

    cardElementImage.style.cursor = 'pointer';
// IMAGES POPUP

    const imagePopupOpen = () => {
        const popupImageElement = document.querySelector('.popup-img');
        handleFormOpen(popupImageElement);
        popupImageElement.style.display = 'block';
    }
    cardElementImage.addEventListener('click', imagePopupOpen);



    return newCard;
};
// ADD CARDS INTO HTML
initialCards.forEach(card => {
    placesContainer.append(createNewCard(card.name, card.link));
    const popupInputImageName = document.querySelector('.popup__input_image_name');
    const popupInputImageLink = document.querySelector('.popup__input_image_link');



});


// const handleFormNewItemSubmit = (event) => {
//     event.preventDefault();
//     handleFormClose(popupNewItem);
//     const newImage = {name: popupInputImageName.value, link: popupInputImageLink.value};
//     initialCards.unshift(newImage);
//     placesContainer.append(newImage);
// };
// formNewItem.addEventListener('submit', handleFormNewItemSubmit);


