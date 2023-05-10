import {mult, splitInWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test("Sum should be correct", () => {
    //action
    const result = sum(a, b)
    const result2 = sum(a, c)
    const result3 = sum(b, c)

    //expected result
    expect(result).toBe(3)
    expect(result2).toBe(4)
    expect(result3).toBe(5)


})
test("Multiply should be correct", () => {
    //data
    let a = 2
    let b = 3
    let c = 4

    //action
    const result = mult(a, b)
    const result2 = mult(a, c)
    const result3 = mult(b, c)

    //expected result
    expect(result).toBe(2)
    expect(result2).toBe(3)
    expect(result3).toBe(6)


})

test("Splitting into words", () => {
    let sentence = "Hello My Friend"
    let sentence2 = "You are My Favorite - Friend !"

    const result = splitInWords(sentence)
    const result2 = splitInWords(sentence2)

    expect(result.length).toBe(3)
    expect(result[0]).toBe("hello")
    expect(result[1]).toBe("my")
    expect(result[2]).toBe("friend")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("you")
    expect(result2[1]).toBe("are")
    expect(result2[2]).toBe("my")
    expect(result2[3]).toBe("favorite")
    expect(result2[4]).toBe("friend")

})


