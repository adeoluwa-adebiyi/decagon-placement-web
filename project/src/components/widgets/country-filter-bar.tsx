import { Select, Box } from "@chakra-ui/react";
import React from "react";
import { CountryKeyEntry } from "../../domain/models/country-key-entry";

export interface CountryFilterBarProps{
    countryKeyList: CountryKeyEntry[];
    setCountryFilter: (data:string)=>void;
    currentCountry: string;
}

export const CountryFilterBar = (props: CountryFilterBarProps): JSX.Element=>{
    const { countryKeyList, setCountryFilter, currentCountry } = props;

    return (
        <Box display="flex" flexDirection="row" flex={2}>
            <Select value={currentCountry} backgroundColor="#e2e3ec" borderRadius="25px" size="lg" onChange={(e) => setCountryFilter(e.target.value)} width={"100%"}>
                {countryKeyList.map((countryKeyEntry: CountryKeyEntry, index:number) => 
                    <option key={index} value={countryKeyEntry.key}>{countryKeyEntry.name}</option>
                )}
            </Select>
        </Box>
    );
}