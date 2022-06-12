// *** Properties *** 
const myEmojis = ['💩','🔫','🤡', '🎲', '🤔']
const emojiContainer = document.getElementById('emojiContainer')
const emojiInput = document.getElementById('emoji-input')

// *** Renders *** 
renderEmoji(myEmojis)

// *** Methods *** 
function renderEmoji(eArray) {

    emojiInput.value = ""
    emojiContainer.innerHTML = ""

    eArray.forEach (element => {
        const createSpan = document.createElement('span')
        createSpan.textContent = element
        emojiContainer.append(createSpan)
    })
}

// *** Buttons *** 
// Push Button
document.getElementById('push-btn').addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        renderEmoji(myEmojis)
    }
    else { console.log('Input is Empty') }
})

// Unshift Button
document.getElementById('unshift-btn').addEventListener('click', function() {    
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        renderEmoji(myEmojis)
    }
    else { console.log('Input is Empty') }
})

// Pop Button
document.getElementById('pop-btn').addEventListener('click', function() {
    myEmojis.pop()
    renderEmoji(myEmojis)
})

// Shift Button
document.getElementById('shift-btn').addEventListener('click', function() {
    myEmojis.shift()
    renderEmoji(myEmojis)
})
