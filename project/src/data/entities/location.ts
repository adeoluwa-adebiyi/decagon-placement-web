import { Coordinates } from "./coordinates";
import { Timezone } from "./timezone";

export interface Location {
    street:      string | { number: number, name: string};
    city:        string;
    state:       string;
    postcode:    number | string;
    coordinates: Coordinates;
    timezone:    Timezone;
    country?: string|null|undefined;
}