/**
 * 
 * @param str 
 */
export const cutString = (str: string | number): string => {
    const _str = "00000" + str
    return _str.substring(_str.length - 3)
}
