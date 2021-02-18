export const dayAgo = (day: number): Date => {
    const date = new Date(); // today!
    date.setDate(date.getDate() - day);

    return date;
};
