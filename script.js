function createCard(title, content) {
    let all = document.getElementById('ctr');
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let top = document.createElement('div');
    top.setAttribute('class', 'top')
    let titleCard = document.createElement('span')
    titleCard.setAttribute('class', 'title-card')
    titleCard.innerHTML = title
    top.appendChild(titleCard);

    let moin = document.createElement('div')
    moin.innerHTML = '<span>-</span>'
    moin.setAttribute('onclick', 'deleteTag(this)')
    moin.setAttribute('class', 'moin')
    top.appendChild(moin);
    card.appendChild(top);

    let messageContainer = document.createElement('div')
    messageContainer.setAttribute('class', 'message-container')

    let message = document.createElement('span')
    message.innerHTML = content
    message.setAttribute('class', 'message')
    messageContainer.appendChild(message);

    card.appendChild(messageContainer)
    all.appendChild(card);
}

function create() {
    var title = prompt('Titre : ')
    var message = prompt('Messsage : ')
    createCard(title, message)
}


function deleteTag(tag) {
    let card = tag
        .parentNode
        .parentNode;
    card.remove()
}
