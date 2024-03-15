const tweetInput = document.querySelector('#message')

const submitTweet = document.querySelector('#submit-tweet')

const tweetFeed = document.querySelector('.tweet-feed')


submitTweet.onclick = () => {
    const tweetTemplate = document.querySelector('.tweet').cloneNode(true)
    const tweetReceiver = tweetTemplate.querySelector('.tweet-copy')

    tweetReceiver.innerHTML = tweetInput.value
    tweetFeed.prepend(tweetTemplate)
    tweetInput.value=''
}