const lz = (num: number) => (num < 10 ? `0${num}` : num);

export const now = () => minutesFromNow(0);

export const minutesFromNow = (minutes: number) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + minutes);
    return formatDateInDbStyle(date);
};

export const formatDateInDbStyle = (date: Date) => {
    const year = date.getFullYear();
    const month = lz(date.getMonth() + 1);
    const day = lz(date.getDate());
    const hours = lz(date.getHours());
    const minutes = lz(date.getMinutes());
    const seconds = lz(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const isInPast = (date: string) => {
    const now = new Date();
    const dateToCheck = new Date(date);

    return dateToCheck < now;
};

export const isValidDate = (date: string) => {
    const dateToCheck = new Date(date);

    return !isNaN(dateToCheck.getTime());
};
