export function dateStringToDate(dateString: string): Date {
    // 10/08/2018 = DD/MM/YYYY => new Date(2018,07,10)
    const dateTokens = dateString.split('/').map((token: string): number => {
        return parseInt(token);
    });

    return new Date(dateTokens[2], dateTokens[1] - 1, dateTokens[0]);
}