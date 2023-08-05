import { RefObject } from "react";

const handleInvoiceKeyPress = (event: KeyboardEvent, dateInputRef: RefObject<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (dateInputRef.current) {
            dateInputRef.current.focus();
        }
    }
};
const handleDateKeyPress = (event: KeyboardEvent, dateInputRef: RefObject<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        formatAndSetDate(dateInputRef);
    }
};

//   Get today date 
const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}


const formatAndSetDate = (dateInputRef: RefObject<HTMLInputElement>) => {
    if (dateInputRef.current) {
        const inputDate = dateInputRef.current.value;
        const formattedDate = formatDate(inputDate);
        dateInputRef.current.value = formattedDate as string;
    }
};

const formatDate = (inputDate: String) => {
    const cleanDate = inputDate.replace(/\D/g, '');
    let day, month, year;
    if (cleanDate.length === 6) {
        // Format: "010223"
        day = cleanDate.slice(0, 2);
        month = cleanDate.slice(2, 4);
        year = cleanDate.slice(4, 6);
    } else if (cleanDate.length === 8) {
        // Format: "01022023"
        day = cleanDate.slice(0, 2);
        month = cleanDate.slice(2, 4);
        year = cleanDate.slice(4, 8);
    } else if (cleanDate?.length === 6 || cleanDate?.length === 8) {
        // Format: "01/02/23" or "01.02.23"
        const separators = ['/', '.', ',', ' ', '-', '=', '\\'];
        const separator = separators.find((sep) => inputDate.includes(sep));
        console.log(separator);
        if (separator) {
            const parts = cleanDate.split(separator);
            day = parts[0];
            month = parts[1];
            year = parts[2];
        }
        console.log("day, month, year");
    } else if (cleanDate.length === 4 && !/\D/.test(inputDate as string)) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();

        day = cleanDate.slice(0, 2);
        month = cleanDate.slice(2, 4);
        year = currentYear;

        if (
            currentMonth > parseInt(month, 10) ||
            (currentMonth === parseInt(month, 10) && currentDay > parseInt(day, 10))
        ) {
            year++;
        }
    }
    else {
        return inputDate;
    }
    let formattedMonth = "April";
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    if (month) {
        formattedMonth = monthNames[parseInt(month, 10) - 1];
    }
    const formattedDate = `${day}-${formattedMonth}-${year}`;
    return formattedDate;
};

export {
    handleInvoiceKeyPress,
    handleDateKeyPress,
    getCurrentDate,
    formatAndSetDate,
    formatDate
}