import { VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_LEADING_TEXT, FILTER_PLACEHOLDER_TEXT } from "../../config/nav-section";
import { CountryKeyEntry } from "../../domain/models/country-key-entry";
import { setCountryVisible } from "../../store/actions/user-actions";
import { AppStoreState } from "../../store/store";
import { CountryFilterBar } from "./country-filter-bar";
import { CountryVisibleSwitch } from "./country-visible-switch";
import { SearchInputFilter } from "./search-input-filter";

export interface ResultFilterBarProps {
    countryKeyList: CountryKeyEntry[];
    setCountryFilter: (data:string)=>void;
    currentCountry: string;
    countryVisible: boolean;
    setCountryVisible: (data:boolean)=>void;
}

export const ResultFilterBar = (props: ResultFilterBarProps): JSX.Element => {

    const countryVisible = useSelector((state:AppStoreState)=>state.users.countryVisible);

    const dispatch = useDispatch();


    const { countryKeyList=[], setCountryFilter, currentCountry, } = props;


    return (
        <VStack alignItems="start" width="100%" paddingLeft={4} paddingRight={4}>
            <Text>{FILTER_LEADING_TEXT}</Text>
            <HStack width="100%">
                <SearchInputFilter placeholder={FILTER_PLACEHOLDER_TEXT} />
                <CountryFilterBar countryKeyList={countryKeyList} 
                    setCountryFilter={setCountryFilter} 
                    currentCountry={currentCountry} />
                <CountryVisibleSwitch countryVisible={countryVisible} setCountryVisible={(state:boolean)=>dispatch(setCountryVisible(state))}/>
            </HStack>
        </VStack>
    )
}