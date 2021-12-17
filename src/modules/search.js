const search = () => {
    const searchBtn = document.querySelector('.search .search-btn button');

    searchBtn.addEventListener('click', () => {
        let inputValue = document.querySelector('.search-wrapper_input').value;
        console.log(`input.value = ${inputValue}`);
})
}

export default search;