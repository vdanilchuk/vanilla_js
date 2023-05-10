export type GovStreetType = {
    title: string
}
export type GovAddressType = {
    street: GovStreetType
}
export type GovernmentBuildingsType = {
    type: "HOSPITAL"| "FIRE-STATION"
    budget: number
    staffCount: number
    address: GovAddressType
}

export type StreetType = {
    title: any
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}
