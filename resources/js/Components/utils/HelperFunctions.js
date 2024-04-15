export const formatDuration = (field) => {
    const startDate = field.startDate.split("-");
    const endDate = field.endDate.split("-");
    const durationY = endDate[0] - startDate[0];
    const durationMo = endDate[1] - startDate[1];
    const duration =
        durationY !== undefined
            ? (durationY > 0
                  ? `${durationY} year${durationY > 1 ? "s" : ""}`
                  : "") +
              (durationY > 0 && durationMo ? " and " : "") +
              (durationMo
                  ? `${durationMo} month${durationMo > 1 ? "s" : ""}`
                  : "")
            : "";
    return duration;
};

export const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}`;
}
