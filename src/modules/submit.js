import { main } from "./fetch.js"

const submit = () => {
    const name = document.querySelector('#name')
    const score = document.querySelector('#score')
    
    if(name.value === '' || score.value === '') return
    else {
        let pName = name.value;
        let pScore = score.value;
        const post = document.querySelector('.post-message')
        post.innerHTML = 'Loading...'
        main(pName, pScore)
        name.value = score.value = '';
    }
}

export default submit