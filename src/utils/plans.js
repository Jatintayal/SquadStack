/**
 * @param price 
 * @returns price
 * Preprocesses the price
 */
export const attachDollar = (price) => {
        return `$${price}`
    }