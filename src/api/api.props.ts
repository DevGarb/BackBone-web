export interface DevApiModel {
    id?: string;
    profileUrl?: string;
    name: string;
    dateOfBirth: Date;
    role: string;
    checkbox: boolean;
    radio: string;
    tel: number;
    obs: string;
}

export interface PetResult {
    name: string
}
