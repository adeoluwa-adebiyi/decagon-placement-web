import { Coordinates } from "./coordinates";
import { Timezone } from "./timezone";

export interface Location {
    street:      string;
    city:        string;
    state:       string;
    postcode:    string;
    coordinates: Coordinates;
    timezone:    Timezone;
}