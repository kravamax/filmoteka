const changingButtonStyles = (key, data) => {
    if (key === null) {
        return "Add";
    } else if(JSON.parse(localStorage.getItem(key)) === null) {
        return "Add";
    }
    else {
        let finder = [...JSON.parse(localStorage.getItem(key))];
        let filter = finder.find(elem => elem.id === data.id);

        if (filter) {
            return "Remove";
        }
        else {
            return "Add";
        };
    };
};

export default changingButtonStyles;