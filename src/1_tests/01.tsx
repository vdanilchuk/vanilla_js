export const sum =
    (a: number, b: number) => {
        return a + b
    }
export const mult =
    (a: number, b: number) => {
        return a * b
    }

export const splitInWords = (sentence: string) => {
    const words = sentence.toLowerCase().split(" ")

    return words
        .filter(w => w !== "" && w !== "!" && w !== "-")
        .map(w => w
            .replace(",", "")
            .replace("!", "")
            .replace(".", ""));
}
