export const guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            let r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
};

export const guid8 = () => {
    return guid().substring(0, 8);
};

export const guid4 = () => {
    return guid().substring(0, 4);
};

export default guid;
