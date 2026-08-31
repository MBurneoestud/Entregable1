export interface IWeapon {
    name: string;
    points: number;
    compatibleUnitTypes: string[];
}

export class Weapon implements IWeapon {
    name: string;
    points: number;
    compatibleUnitTypes: string[];

    constructor(name: string, points: number, compatibleUnitTypes: string[]) {
        this.name = name;
        this.points = points;
        this.compatibleUnitTypes = compatibleUnitTypes;
    }

    isCompatibleWith(unitType: string): boolean {
        return this.compatibleUnitTypes.includes(unitType);
    }
}