import { UserInfoModel } from "../models/user-info";

export const filterUsersByText = (infos:UserInfoModel[], filterText: string):UserInfoModel[]=>{
    const userInfos = infos.filter((info: UserInfoModel) => {
        let returnAble = false;

        if(info.address.city.toLowerCase().includes(filterText.toLowerCase())){
            returnAble = true;
        }

        if(info.address.state=="" && info.address.state.toLowerCase().includes(filterText.toLowerCase())){
            returnAble = true;
        }

        if(info.address.street.name.toLowerCase().includes(filterText.toLowerCase())){
            returnAble = true;
        }

        if(info.address.street.number.toString().includes(filterText)){
            returnAble = true;
        }

        if(info.firstname.toLowerCase().includes(filterText.toLowerCase())){
            returnAble = true;
        }

        if(info.lastname.toLowerCase().includes(filterText.toLowerCase())){
            returnAble = true;
        }

        if(info.email.toLowerCase().includes(filterText.toLowerCase())){
            returnAble = true;
        }

        if(info.phone.includes(filterText)){
            returnAble = true;
        }


        if(info.title.toLowerCase().includes(filterText.toLocaleLowerCase())){
            returnAble = true;
        }

        if(info.joined_date.includes(filterText)){
            returnAble = true;
        }

        if(returnAble)
            return info;
        return null;
    }); 
    return userInfos;
}