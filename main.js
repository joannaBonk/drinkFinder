const search = document.querySelector('.search')
const li = document.querySelectorAll('li')


const searchEngine = e => {
    const text = e.target.value.toLowerCase()

    li.forEach(el=> {
        if(el.textContent.toLowerCase().indexOf(text) !== -1){
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}
search.addEventListener('keyup', searchEngine)


// Wyszukiwarka za pomocą RegExp

// const searchRegExp = () => {
//     li.forEach(el => {
//         const match = new RegExp(search.value, 'i').test(el.textContent)
//         if (!match) {
//             el.style.display = 'none'
//         } else
//             el.style.display = 'block'
//     })
// }

// search.addEventListener('keyup', searchRegExp)