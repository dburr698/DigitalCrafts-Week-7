
const chatMessageBox = document.getElementById('chatMessageBox')
const sendMessage = document.getElementById('sendMessage')
const messagesUL = document.getElementById('messagesUL')


sendMessage.addEventListener('click', () => {
    const chatMessage = chatMessageBox.value
    socket.emit('Atlanta', {message: chatMessage})
})

socket.on('Atlanta', (chat) => {
    const messageItem = `<li>${chat.message}</li>`
    messagesUL.insertAdjacentHTML('beforeend', messageItem)
})

