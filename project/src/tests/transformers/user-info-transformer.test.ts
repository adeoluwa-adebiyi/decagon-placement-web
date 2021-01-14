import { UserInfo } from "../../data/entities/user-info";
import { Location } from "../../data/entities/location";
import { UserInfosResult } from "../../data/entities/user-infos-result";
import { USER_INFO_FETCH_FIXTURE_DEFAULT } from "../../data/fixtures/user-info-fetch-fixture";
import { UserInfoDataTransformer } from "../../data/transformers/user-info-data.transformer";
import { UserInfoModel } from "../../domain/models/user-info";

describe("Tests UserInfoTransformer for functionality", ()=>{

    it("Should correctly transform UserInfoData to UserInfoModel", ()=>{
        const data: UserInfosResult = USER_INFO_FETCH_FIXTURE_DEFAULT;
        expect(new UserInfoDataTransformer().transform(data.results[1])).toEqual(<UserInfoModel>{
            title: data.results[1].name.title,
            firstname:       data.results[1].name.first,
            lastname:       data.results[1].name.last,
            address:   data.results[1].location,
            email:      data.results[1].email,
            joined_date: data.results[1].registered.date,
            phone:      data.results[1].phone,
            pictureURL:    data.results[1].picture.medium,
            nat:        data.results[1].nat
        });
    });

});