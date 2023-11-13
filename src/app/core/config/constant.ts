import { Domain } from "../domain/domain";

export class Constant {
    public static BASE_URL = "http://localhost:8080";

    public static PAGE_SIZE_OPTION = [
        5,10,15
      ]


    // config api from controller backend
    public static AUTH = {
        REGISTER: `${Domain.AUTH}/register`,
        LOGIN: `${Domain.AUTH}/admin/login`,
        LOGIN_USER: `${Domain.AUTH}/login`,
    }
    public static USER = {
        GET_LIST_ALL_WITH_PAGE_USER: `${Domain.USER}`,
        GET_USER_BY_ID: `${Domain.USER}`,
        UPDATE_USER: `${Domain.USER}/update`,
        UPDATE_USER1: `${Domain.USER}/update1`,
        DELETE_USER: `${Domain.USER}/delete`,
        CHANGE_PASSWORD: `${Domain.USER}/changePassword`,
    }
    public static ROLE = {
        GET_ROLE_BY_ID: `role`,
        LIST_ROLE: `role`,
        ADD_ROLE: `${Domain.ROLE}/addRole`,
        DELETE_ROLE: `${Domain.ROLE}/delete`,
        UPDATE_ROLE: `${Domain.ROLE}/updateRole`
    }
    public static TYPICAL_NUMBER ={
        GET_LIST_ALL_PAGE : `${Domain.TYPICAL_NUMBER}`,
        GET_ALL_NUMBER : `${Domain.TYPICAL_NUMBER}/home`,
        GET_NUMBER_BY_ID: `${Domain.TYPICAL_NUMBER}`,
        ADD_NUMBER: `${Domain.TYPICAL_NUMBER}/add`,
        UPDATE_NUMBER: `${Domain.TYPICAL_NUMBER}/update`,
        DELETE_NUMBER: `${Domain.TYPICAL_NUMBER}/delete`,
    }
    public static PROJECT={
        GET_LIST_ALL_WITH_PAGE:`${Domain.PROJECT}`,
        GET_ID:`${Domain.PROJECT}`,
        ADD_PROJECT:`${Domain.PROJECT}/create`,
        UPDATE_PROJECT: `${Domain.PROJECT}/update`,
        DELETE_PROJECT: `${Domain.PROJECT}/delete`,
    }
    public static PRODUCT={
        GET_LIST_ALL_WITH_PAGE:`${Domain.PRODUCT}`,
        GET_ID:`${Domain.PRODUCT}`,
        ADD_PRODUCT:`${Domain.PRODUCT}/create`,
        UPDATE_PRODUCT: `${Domain.PRODUCT}/update`,
        DELETE_PRODUCT: `${Domain.PRODUCT}/delete`,
    }
}
