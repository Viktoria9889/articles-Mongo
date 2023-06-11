const formEl = document.querySelector('.form');
let title = document.querySelector('.title');
let text = document.querySelector('.text');




const addNewArticle = () => {
    if(text.value && title.value) {
        const addArticle =() => {
            axios.post('/articles_data', {title:title.value, text:text.value})
        }
        addArticle();
    }
}
document.querySelector('.btn').addEventListener('click', () => {
    addNewArticle()
})
