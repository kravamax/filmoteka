const changingButtonStyles = (key, data, info) => {
    
    if (key === null) {
        return `Add to ${info}`;
    } else if(JSON.parse(localStorage.getItem(key)) === null) {
        return `Add to ${info}`;
    }
    else {
        let finder = [...JSON.parse(localStorage.getItem(key))];
        let filter = finder.find(elem => elem.id === data.id);


        if (filter) {
            return `Remove from ${info}`;
        }
        else {
            return `Add to ${info}`;
        };
    };
};

export default changingButtonStyles;
