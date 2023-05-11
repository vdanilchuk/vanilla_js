import {student, StudentType} from "../02_object/02";
import {GovernmentBuildingsType, HouseType} from "../02_object/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        })

}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const checkCountry = (student: StudentType, country: string) => {
    return (student.address.city.countryTitle === country);
}

export const addMoneyToBudget = (building: GovernmentBuildingsType[], type: string, budget: number) => {
    if (building[0].type === type) {
        building[0].budget += budget
    }
    if (building[1].type === type) {
        building[1].budget += budget
    }
}

export const repairHouse =(houseType: HouseType )=> {
    houseType.repaired = true
}

export const toFireStaff = (staff: GovernmentBuildingsType , count: number) =>{
    staff.staffCount -= count
}

export const toHireStaff = (staff: GovernmentBuildingsType , count: number) =>{
    staff.staffCount += count
}
