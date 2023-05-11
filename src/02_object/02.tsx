
type TechnologiesType = {
    id: number
    title: string
}

type AddressType = {
    streetTitle: string,
    city: LocalCityType
}

type LocalCityType = {
    title: string
    countryTitle: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}

export const student: StudentType = {
    id: 1,
    name: "Pavel",
    age: 12,
    isActive: false,
    address: {
        streetTitle: "Kolejowa 49A",
        city: {
            title: "Warsaw",
            countryTitle: "Belarus"
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

console.log(student.technologies[2].title)
