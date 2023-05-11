import {StudentType} from "../02_object/02";
import {addSkill, checkCountry, makeStudentActive} from "./03";


let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Pavel",
        age: 12,
        isActive: false,
        address: {
            streetTitle: "Kolejowa 49A",
            city: {
                title: "Warsaw",
                countryTitle: "Poland"
            }
        },
        technologies: [{
            id: 1,
            title: "JS"
        }, {
            id: 2,
            title: "CSS"
        }, {
            id: 3,
            title: "HTML"
        },]
    }
})
test("new skill should be added", () => {
    addSkill(student, "React")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBeDefined()
    expect(student.technologies[3].title).toBe("React")
})

test("Student Should be Made Active", () => {
    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test("Student lives in Country", () => {

    let result = checkCountry(student, 'Poland')
    let result2 = checkCountry(student, 'Belarus')

    expect(result).toBe(true)
    expect(result2).toBe(false)
})
