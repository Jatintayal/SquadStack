/**
 *  Checks if the machine is connected to the internet or not
 * @returns is online
 */
export const checkIfOnline = () => {
    return window.navigator.onLine
}