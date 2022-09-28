export function getDateDiffInDays(start, end) {
    const startUTC = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())
    const endUTC = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())
    const msDay = 1000 * 60 * 60 * 24

    return Math.floor((endUTC - startUTC) / msDay)
}