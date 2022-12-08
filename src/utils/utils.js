export const formattedDate = (dateString, separator="-") => {
    const today = new Date(dateString).toISOString().split("T")[0];

    return today.split("-").reverse().join(separator);
}

