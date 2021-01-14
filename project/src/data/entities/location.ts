import { Coordinates } from "./coordinates";
import { Timezone } from "./timezone";

export interface StreetObject{
    number: number;name: string
}


export interface Location {
    street:      StreetObject;
    city:        string;
    state:       string;
    postcode:    number | string;
    coordinates: Coordinates;
    timezone:    Timezone;
    country?: string|null|undefined;
}