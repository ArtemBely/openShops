export const defineUpdate = () => {
    let def;
    if (typeof window != "undefined") {
        if (window.location.pathname.split('/').length == 4) {
            def = window.location.pathname.split('/')[2].concat('/').concat(window.location.pathname.split('/')[3]);
        }
        else
            def = window.location.pathname.split('/').pop();
    }
    return def;
};
