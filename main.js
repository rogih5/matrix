
const userName = "Neo da Matrix";

document.getElementById('chat').addEventListener('submit', function (e) {
    e.preventDefault()

    let messageDiv = document.getElementById('message');


    let messageBox = document.getElementById('messages');
    messageBox.insertAdjacentHTML('beforeend', sendMessage(userName, messageDiv.value))

    if (messageDiv.value == "vermelha") {
        let response = 'demoro lek, boa escolha, ela te revelara o mundo como é.'
        messageBox.insertAdjacentHTML('beforeend', sendMessage('Morpheus da Matrix', response))
    }    
    else if (messageDiv.value == "azul") {
        let response = 'Quem é você'
        messageBox.insertAdjacentHTML('beforeend', sendMessage('Morpheus da Matrix', response))
    } else {
        let response = 'Sistema hackeado, por não digitar o que deseja!'
        for (var i = 0; i < 500; i++) {
            messageBox.insertAdjacentHTML('beforeend', sendMessage('Morpheus da Matrix', response))
         }
    }


    messageDiv.value = '';
});


function sendMessage(username, message) {
    return `<div>${username}: ${message}</div>`
}