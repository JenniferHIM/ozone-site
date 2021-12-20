const getData = () => {
    return fetch('https://test-6f619-default-rtdb.firebaseio.com/goods.json')
        .then(response => {
            return response.json();
        })
};

export default getData;