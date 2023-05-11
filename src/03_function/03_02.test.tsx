import {CityType} from "../02_object/02_02";
import {addMoneyToBudget, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        },
            {
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "Happy street"
                }
            }
        },
            {
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: "Happy street"
                }
            }
        }],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }],
        citizensNumber: 1000000
    }
})

test("Budget Should be changed to Hospital", () => {
    addMoneyToBudget(city.governmentBuildings,'HOSPITAL',100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})
test("Budget Should be changed to FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings,'FIRE-STATION',-100000)

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('Houses should be repaired',()=>{
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})

test('Staff Should be fired',()=>{
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test('Staff Should be increased',()=>{
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})
