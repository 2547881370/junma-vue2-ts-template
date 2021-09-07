export class Validate {
    /**
     * @param {string} path
     * @returns {Boolean}
     */
    static isExternal(path: string): boolean {
        return /^(https?:|mailto:|tel:)/.test(path)
    }
}