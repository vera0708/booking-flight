const STORAGE = 'https://airplane-methed.herokuapp.com/airplane/';


export const getStorage = (id) => {
    if (localStorage.getItem(`tour-${id}`)) {
        return JSON.parse(localStorage.getItem(`tour-${id}`));
    } else {
        return [];
    }
};

export const setStorage = (id, data) => {
    const storage = getStorage(id);
    const filterBooking = storage.filter(item => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].ticket === item.ticket) {
                return false
            }
        }
        return item;
    });
    const newBooked = [...filterBooking, ...data];
    localStorage.setItem(`tour-${id}`, JSON.stringify(newBooked));
};
/*export const getStorage = id => fetch(`${STORAGE}${id}`)
    .then(response => response.json())
// .then(data => data?.seats || []);

console.log('1');
export const setStorage = (id, data) => {
    fetch(`${STORAGE}${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
};*/