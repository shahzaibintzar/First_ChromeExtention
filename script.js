fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokeDate =>  {
    const jockText = jokeDate.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = jockText;
})