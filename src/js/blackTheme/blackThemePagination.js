const blackThemePagination = () => {
    //console.log(document.querySelectorAll(".tui-page-btn "))
    //const paginationBlack = [...document.querySelectorAll(".tui-page-btn ")]

    if (document.querySelector(".tui-pagination")) {
        const paginationBlack = document.querySelector(".tui-pagination")
        if (JSON.parse(localStorage.getItem("toggle"))) {
            paginationBlack.classList.add('black--pagination');
        }
        else {
        paginationBlack.classList.remove('black--pagination');
        };
    }
};

export default blackThemePagination;