// EDIT USERNAME AND USER OCCUPATION
const editProfileButton = document.querySelector('.profile__edit-btn');
const closeNewUserPopupButton = document.querySelector('.popup__close-btn_type_user');
const formNewUser = document.querySelector('.popup__form_type_user');
const popupNewUser = document.querySelector('.popup_type_user');
const popupInputUserName = document.querySelector('.popup__input_user_name');
const popupInputOccupation = document.querySelector('.popup__input_user_occupation');
const userNameElement = document.querySelector('.profile__user-name');
const userOccupationElement = document.querySelector('.profile__user-occupation');
// -----------------------------------------------------------
// POPUP NEW IMAGE
const formNewItem = document.querySelector('.popup__form_type_item');
const popupNewItem = document.querySelector('.popup_type_item');
const openNewItemButton = document.querySelector('.profile__add-btn');
const closeNewItemPopupButton = document.querySelector('.popup__close-btn_type_item');
const submitButton = document.querySelector('.popup__submit-btn');
// -----------------------------------------------------------
// POPUP IMAGE
const popupNewImage = document.querySelector('.popup_type_image');
const modalImage = popupNewImage.querySelector('.popup__image_img');
const modalImageHeading = popupNewImage.querySelector('.popup__image_heading');
const modalCloseButton = popupNewImage.querySelector('.popup__close-btn_type_image')
// POPUP FORMS OPEN
const handleFormOpen = (item) => {
    item.classList.add('popup_opened');
};
// -----------------------------------------------------------
// POPUP FORMS CLOSE
const handleFormClose = (item) => {
    item.classList.remove('popup_opened');
};
// -----------------------------------------------------------
// POPUP NEW USER FORM OPEN
const handleNewUserFormOpen = () => {
    handleFormOpen(popupNewUser);
    popupInputUserName.value = userNameElement.textContent;
    popupInputOccupation.value = userOccupationElement.textContent;
    alert('OPEN')
};
// -----------------------------------------------------------
// POPUP NEW USER FORM CLOSE
const handleNewUserFormClose = () => {
    handleFormClose(popupNewUser);
    alert('NOW CLOSE!')
};
// -----------------------------------------------------------
// POPUP NEW USER FORM SUBMIT
function handleFormSubmit(event) {
    event.preventDefault();
    userNameElement.textContent = popupInputUserName.value;
    userOccupationElement.textContent = popupInputOccupation.value;
    handleFormClose(popupNewUser);
};
// -----------------------------------------------------------
// POPUP NEW USER FORM EVENTS
editProfileButton.addEventListener('click', handleNewUserFormOpen);
closeNewUserPopupButton.addEventListener('click', handleNewUserFormClose);
formNewUser.addEventListener('submit', handleFormSubmit);
// ---------------------------------------------------------------------------
// ADD PHOTOS TO GALLERY

// NEW ITEM POPUP FORM OPEN
function handleNewItemFormOpen(event) {
    handleFormOpen(popupNewItem);
};
// -----------------------------------------------------------
// NEW ITEM POPUP FORM CLOSE
function handleNewItemFormClose(event) {
    handleFormClose(popupNewItem);
};
// -----------------------------------------------------------
// POPUP NEW ITEM FORM EVENTS
openNewItemButton.addEventListener('click', handleNewItemFormOpen);
closeNewItemPopupButton.addEventListener('click', handleNewItemFormClose);
// -----------------------------------------------------------------------------
// GALERY PLACES
const initialCards = [
    {
        name: 'Териберка',
        alt: 'Териберка и Баренцево море зимой.',
        link: 'https://images.unsplash.com/photo-1606841599773-7307a2b5ce34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=953&q=80'
    },
    {
        name: 'Байкал',
        alt: 'Зимний солнечный день на Байкале.',
        link: 'https://images.unsplash.com/photo-1676466920684-5d1aae90c9c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Сахалин',
        alt: 'Зимний солнечный день на Байкале',
        link: 'https://images.unsplash.com/photo-1662953594079-a43b3767aca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Дагестан',
        alt: 'Дагестанские горы.',
        link: 'https://images.unsplash.com/photo-1652716456950-0c1d6e1433cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Мурманск город герой',
        alt: 'Алёша памятник в Мурманске.',
        link: 'https://images.unsplash.com/photo-1615924631431-3a5c33d767d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        name: 'Алтай',
        alt: 'Долина в Алтае.',
        link: 'https://images.unsplash.com/photo-1643281237857-5f14c2b9f3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
];
// -----------------------------------------------------------------------------
const placesContainer = document.querySelector('.places');
// CREATE NEW CARD
function createNewCard(newName, newLink) {
    const newCard = document.querySelector('#cardTemplate').content.cloneNode(true);
    const cardElementHeading = newCard.querySelector('.card__title');
    const cardElementImage = newCard.querySelector('.card__image');
    cardElementHeading.textContent = newName;
    cardElementImage.setAttribute('src', newLink);
    cardElementImage.setAttribute('alt', newName);
    // -----------------------------------------------------------
    // ADD LIKE ONTO IMAGES
    const imageLikeButton = newCard.querySelector('.card__like-btn');
    const puttLike = () => {
        imageLikeButton.classList.toggle('card__like-btn_active');
    };
    imageLikeButton.addEventListener('click', puttLike);
    // -----------------------------------------------------------
    // REMOVE CARDS
    const removeImageButton = newCard.querySelector('.card__remove-btn');
    const removeImage = () => {
        const cardContainer = removeImageButton.closest('.card');
        cardContainer.remove();
    };
    removeImageButton.addEventListener('click', removeImage);

    cardElementImage.style.cursor = 'pointer';
    // -----------------------------------------------------------
    // IMAGES MODAL
    
    // const openModalImage = () => {
    //     imageModal.style.visibility = 'visible';
    //     imageModal.style.opacity = 1;
    // NEW ITEM POPUP FORM OPEN
    const openModalImage = () => {
        handleFormOpen(popupNewImage);
    };
    // -----------------------------------------------------------
    // NEW ITEM POPUP FORM CLOSE
    const handleNewItemFormClose = () => {
        handleFormClose(popupNewImage);
    };
    modalImage.setAttribute('src', newLink);
    modalImage.setAttribute('alt', newName)
    modalImageHeading.textContent = newName;
    const closeModal = () => {
        imageModal.style.visibility = 'hidden';
        imageModal.style.opacity = 0;
    };
    cardElementImage.addEventListener('click', openModalImage);
    modalCloseButton.addEventListener('click', closeModal)
    // -----------------------------------------------------------
    return newCard;
};
// -----------------------------------------------------------------------------
// ADD CARDS INTO HTML
initialCards.forEach(card => {
    placesContainer.append(createNewCard(card.name, card.link));
    const popupInputImageName = document.querySelector('.popup__input_image_name');
    const popupInputImageLink = document.querySelector('.popup__input_image_link');
});
// -----------------------------------------------------------------------------
// ADD NEW IMAGES TO GALERY
const popupInputImageName = document.querySelector('.popup__input_image_name');
const popupInputImageLink = document.querySelector('.popup__input_image_link');
const handleFormNewItemSubmit = (event) => {
    event.preventDefault();
    
    const link = document.querySelector('.popup__input_image_link').value;
    const name = document.querySelector('.popup__input_image_name').value;
    const alt = name;
    console.log(alt);
    const newCard = { name, alt, link };
    placesContainer.prepend(createNewCard(newCard.name, newCard.link));
    handleFormClose(popupNewItem);
    event.target.reset();
};
formNewItem.addEventListener('submit', handleFormNewItemSubmit);
// -----------------------------------------------------------------------------



// NOVOOOOOO

// EDIT USERNAME AND USER OCCUPATION
const page = document.querySelector('.page');
const editProfileButton = page.querySelector('.profile__edit-btn');
const closeNewUserPopupButton = page.querySelector('.popup__close-btn_type_user');
const popupNewUser = document.querySelector('.popup_type_user');
const formNewUser = popupNewUser.querySelector('.popup__form_type_user');
const popupInputUserName = popupNewUser.querySelector('.popup__user-name');
const popupInputOccupation = popupNewUser.querySelector('.popup__occupation');
const profile = document.querySelector('.profile');
const userNameElement = profile.querySelector('.profile__user-name');
const userOccupationElement = profile.querySelector('.profile__user-occupation');
// -----------------------------------------------------------
// POPUP NEW IMAGE
const popupNewItem = document.querySelector('.popup_type_item');
const formNewItem = popupNewItem.querySelector('.popup__form_type_item');
const openNewItemButton = profile.querySelector('.profile__add-btn');
const closeNewItemPopupButton = popupNewItem.querySelector('.popup__close-btn_type_item');
const submitButton = popupNewItem.querySelector('.popup__submit-btn');
// -----------------------------------------------------------
// POPUP IMAGE
const popupNewImage = document.querySelector('.popup_type_image');
const popupImage = popupNewImage.querySelector('.popup__img');
const popupImageHeading = popupNewImage.querySelector('.popup__heading');
const closeImagePopup = popupNewImage.querySelector('.popup__close-btn_type_image')
// -----------------------------------------------------------
// PLACES
const placesContainer = document.querySelector('.places');
// -----------------------------------------------------------
// TEMPLATE
// !!!!
const newCard = document.querySelector('#cardTemplate');
const cardElementHeading = newCard.querySelector('.card__title');
const cardElementImage = newCard.querySelector('.card__image');

const imageLikeButton = newCard.querySelector('.card__like-btn');
const removeImageButton = newCard.querySelector('.card__remove-btn');
// !!!!
// -----------------------------------------------------------
// ADD NEW IMAGES TO GALERY
const popupInputImageName = document.querySelector('.popup__image-name');
const popupInputImageLink = document.querySelector('.popup__image-link');
// -----------------------------------------------------------
// POPUP FORMS OPEN
const handleFormOpen = (item) => {
    item.classList.add('popup_opened');
};
// -----------------------------------------------------------
// POPUP FORMS CLOSE
const handleFormClose = (item) => {
    item.classList.remove('popup_opened');
};
// -----------------------------------------------------------
// POPUP NEW USER FORM OPEN
const handleNewUserFormOpen = () => {
    handleFormOpen(popupNewUser);
    popupInputUserName.value = userNameElement.textContent;
    popupInputOccupation.value = userOccupationElement.textContent;
};
// -----------------------------------------------------------
// POPUP NEW USER FORM CLOSE
const handleNewUserFormClose = () => {
    handleFormClose(popupNewUser);
};
// -----------------------------------------------------------
// POPUP NEW USER FORM SUBMIT
const handleFormSubmit = (event) => {
    event.preventDefault();
    userNameElement.textContent = popupInputUserName.value;
    userOccupationElement.textContent = popupInputOccupation.value;
    handleFormClose(popupNewUser);
};
// -----------------------------------------------------------
// POPUP NEW USER FORM EVENTS
editProfileButton.addEventListener('click', handleNewUserFormOpen);
closeNewUserPopupButton.addEventListener('click', handleNewUserFormClose);
formNewUser.addEventListener('submit', handleFormSubmit);
// ---------------------------------------------------------------------------
// ADD PHOTOS TO GALLERY
// NEW ITEM POPUP FORM OPEN
const handleNewItemFormOpen = () => {
    handleFormOpen(popupNewItem);
};
// -----------------------------------------------------------
// NEW ITEM POPUP FORM CLOSE
const handleNewItemFormClose = () => {
    handleFormClose(popupNewItem);
};
// -----------------------------------------------------------
// POPUP NEW ITEM FORM EVENTS
openNewItemButton.addEventListener('click', handleNewItemFormOpen);
closeNewItemPopupButton.addEventListener('click', handleNewItemFormClose);
// -----------------------------------------------------------------------------
// GALERY PLACES
const initialCards = [
    {
        name: 'Териберка',
        alt: 'Териберка и Баренцево море зимой.',
        link: 'https://images.unsplash.com/photo-1606841599773-7307a2b5ce34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=953&q=80'
    },
    {
        name: 'Байкал',
        alt: 'Зимний солнечный день на Байкале.',
        link: 'https://images.unsplash.com/photo-1676466920684-5d1aae90c9c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'Сахалин',
        alt: 'Зимний солнечный день на Байкале',
        link: 'https://images.unsplash.com/photo-1662953594079-a43b3767aca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Дагестан',
        alt: 'Дагестанские горы.',
        link: 'https://images.unsplash.com/photo-1652716456950-0c1d6e1433cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Мурманск город герой',
        alt: 'Алёша памятник в Мурманске.',
        link: 'https://images.unsplash.com/photo-1615924631431-3a5c33d767d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
        name: 'Алтай',
        alt: 'Долина в Алтае.',
        link: 'https://images.unsplash.com/photo-1643281237857-5f14c2b9f3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
];
// -----------------------------------------------------------------------------
// CREATE NEW CARD
function createNewCard(newName, newLink) {





    // ? NEED TO BE CORRECTED!
    newCard.content.cloneNode(true);
    // const cardElementHeading = newCard.querySelector('.card__title');
    // const cardElementImage = newCard.querySelector('.card__image');




    cardElementHeading.textContent = newName;
    cardElementImage.setAttribute('src', newLink);
    cardElementImage.setAttribute('alt', newName);
    // -----------------------------------------------------------
    // ADD LIKE ONTO IMAGES
    // const imageLikeButton = newCard.querySelector('.card__like-btn');
    const puttLike = () => {
        imageLikeButton.classList.toggle('card__like-btn_active');
    };
    imageLikeButton.addEventListener('click', puttLike);
    // -----------------------------------------------------------
    // REMOVE CARDS
    // const removeImageButton = newCard.querySelector('.card__remove-btn');
    const removeImage = () => {
        const cardContainer = removeImageButton.closest('.card');
        cardContainer.remove();
    };
    removeImageButton.addEventListener('click', removeImage);
    cardElementImage.style.cursor = 'pointer';
    // -----------------------------------------------------------
    // IMAGES POPUP
    // NEW ITEM POPUP FORM OPEN
    const openPopupImage = () => {
        handleFormOpen(popupNewImage);
        popupImage.setAttribute('src', newLink);
        popupImage.setAttribute('alt', newName)
        popupImageHeading.textContent = newName;
    };
    // -----------------------------------------------------------
    // NEW ITEM POPUP FORM CLOSE
    const closePopupImage = () => {
        handleFormClose(popupNewImage);
    };
    // POPUP IMAGE EVENTS
    cardElementImage.addEventListener('click', openPopupImage);
    closeImagePopup.addEventListener('click', closePopupImage)
    // -----------------------------------------------------------
    return newCard;
};
// -----------------------------------------------------------------------------
// ADD CARDS INTO HTML
initialCards.forEach(card => {
    placesContainer.append(createNewCard(card.name, card.link));
});
// -----------------------------------------------------------------------------
// ADD NEW IMAGES TO GALERY
const handleFormNewItemSubmit = (event) => {
    event.preventDefault();
    name = popupInputImageName.value;
    alt = name;
    link = popupInputImageLink.value;
    const userNewCard = { name, alt, link };
    placesContainer.prepend(createNewCard(userNewCard.name, userNewCard.link));
    handleFormClose(popupNewItem);
    event.target.reset();
};
formNewItem.addEventListener('submit', handleFormNewItemSubmit);
// -----------------------------------------------------------------------------