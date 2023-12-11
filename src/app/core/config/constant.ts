import {Domain} from "../domain/domain";

export class Constant {
  public static BASE_URL = "http://localhost:8080";

  public static PAGE_SIZE_OPTION = [
    5, 10, 15
  ]

    public static PAGE_SIZE_IMAGE =[
      16,32,48
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
  public static TYPICAL_NUMBER = {
    GET_LIST_ALL_PAGE: `${Domain.TYPICAL_NUMBER}`,
    GET_ALL_NUMBER: `${Domain.TYPICAL_NUMBER}/home`,
    GET_NUMBER_BY_ID: `${Domain.TYPICAL_NUMBER}`,
    ADD_NUMBER: `${Domain.TYPICAL_NUMBER}/add`,
    UPDATE_NUMBER: `${Domain.TYPICAL_NUMBER}/update`,
    DELETE_NUMBER: `${Domain.TYPICAL_NUMBER}/delete`,
  }
  public static PROJECT = {
    GET_LIST_ALL_WITH_PAGE: `${Domain.PROJECT}`,
    GET_ID: `${Domain.PROJECT}`,
    ADD_PROJECT: `${Domain.PROJECT}/create`,
    UPDATE_PROJECT: `${Domain.PROJECT}/update`,
    DELETE_PROJECT: `${Domain.PROJECT}/delete`,
    GET_URL: `${Domain.PROJECT}/home`,
  }
  public static PRODUCT = {
    GET_LIST_ALL_WITH_PAGE: `${Domain.PRODUCT}`,
    GET_ID: `${Domain.PRODUCT}`,
    GET_URL: `${Domain.PRODUCT}/home`,
    ADD_PRODUCT: `${Domain.PRODUCT}/create`,
    UPDATE_PRODUCT: `${Domain.PRODUCT}/update`,
    DELETE_PRODUCT: `${Domain.PRODUCT}/delete`,
  }
  public static MEMBER = {
    GET_ID: `${Domain.MEMBER}`,
    GET_LIST_ALL_WITH_PAGE: `${Domain.MEMBER}`,
    ADD_MEMBER: `${Domain.MEMBER}/create`,
    UPDATE_MEMBER: `${Domain.MEMBER}/update`,
    DELETE_MEMBER: `${Domain.MEMBER}/delete`,
    GET_URL: `${Domain.MEMBER}/home`,
  }
  public static POSTS = {
    GET_ID: `${Domain.POSTS}`,
    SEARCH: `${Domain.POSTS}/tim-kiem`,
    GET_POST_BY_URL: `${Domain.POSTS}/home`,
    LIST_ALL: `${Domain.POSTS}/list`,
    GET_LIST_ALL_WITH_PAGE: `${Domain.POSTS}`,
    ADD_POST: `${Domain.POSTS}/add`,
    UPDATE_POST: `${Domain.POSTS}/update`,
    DELETE_POST: `${Domain.POSTS}/delete`,
  }
  public static CATE_PROJECT = {
    LIST_PAGE_SIZE: `${Domain.CATE_PROJECT}`,
    GET_BY_ID: `${Domain.CATE_PROJECT}`,
    LIST_ALL: `${Domain.CATE_PROJECT}/all`,
    CREATE: `${Domain.CATE_PROJECT}/create`,
    DELETE: `${Domain.CATE_PROJECT}/delete`,
    UPDATE: `${Domain.CATE_PROJECT}/update`,
  }
  public static IMAGE = {
    DOWNLOAD_FILE: `${Domain.IMAGE}/downloadFile`,
    ADD_IMAGE: `${Domain.IMAGE}/add`,
    DELETE_FILE: `${Domain.IMAGE}/deleteFile`,
    GET_FILE_BY_ID: `${Domain.IMAGE}`,
    GET_ALL_IMAGE: `${Domain.IMAGE}/image/all`,
    UPDATE_IMAGE: `${Domain.IMAGE}/image/update`,
    GET_LISTALL_WITH_PAGE: `${Domain.IMAGE}/image`,
    GET_LIST_ALL: `${Domain.IMAGE}/image/all`,
  }
  public static ABOUT = {
    CREATE: `${Domain.ABOUT}/create`,
    UPDATE: `${Domain.ABOUT}/update`,
    GETID: `${Domain.ABOUT}`,
    LIST: `${Domain.ABOUT}`
  }

  public static CONTACT = {
    LIST_ALL_SIZE_PAGE: `${Domain.CONTACT}/number`,
    LIST_ALL_CONTACT: `${Domain.CONTACT}/user`,
    ADD_CONTACT: `${Domain.CONTACT}/add`,
    DELETE: `${Domain.CONTACT}/delete`,
    CONTACTED: `${Domain.CONTACT}/show`,
    NOTCONTACT: `${Domain.CONTACT}/hide`,
  }

  public static ADDRESS = {
    CREATE: `${Domain.ADDRESS}/create`,
    UPDATE: `${Domain.ADDRESS}/update`,
    DELETE: `${Domain.ADDRESS}/delete`,
    LIST: `${Domain.ADDRESS}`
  }
  public static TYPICAL_IMAGE = {
    GET_ALL_LIST_CHANGE_PAGE: `${Domain.TYPICAL_IMAGE}`,
    GET_LIST_ALL: `${Domain.TYPICAL_IMAGE}/show`,
    ADD_IMAGE_BY_ID: `${Domain.TYPICAL_IMAGE}/addimage`,
    GET_FIND_BY_ID: `${Domain.TYPICAL_IMAGE}`,
    DELETE: `${Domain.TYPICAL_IMAGE}/delete`,
    UPDATE: `${Domain.TYPICAL_IMAGE}/update`,
    ADD_TYPICAL_IMAGE: `${Domain.TYPICAL_IMAGE}/add`,
    HIDE: `${Domain.TYPICAL_IMAGE}/hide`,
    SHOW: `${Domain.TYPICAL_IMAGE}/show`,
  }
  public static SLIDERS = {
    GET_LIST_ALL: `${Domain.SLIDERS}/home`,
    GET_SLIDERS: `${Domain.SLIDERS}`,
    ADD: `${Domain.SLIDERS}/add`,
    GET_BY_ID: `${Domain.SLIDERS}`,
    UPDATE: `${Domain.SLIDERS}/update`,
    HIDE_SLIDER: `${Domain.SLIDERS}/hide`,
    SHOW_SLIDER: `${Domain.SLIDERS}/show`,
    DELETE_SLIDER: `${Domain.SLIDERS}/status`,
    GET_IMAGE: `${Domain.SLIDERS}/images`,
  }
  public static LINK_WEB = {
    LIST_PAGE_SIZE:`${Domain.LINK_WEB}`,
    GET_ID:`${Domain.LINK_WEB}`,
    DELETE: `${Domain.LINK_WEB}/delete`,
    CREATE: `${Domain.LINK_WEB}/create`,
    UPDATE: `${Domain.LINK_WEB}/update`
  }
}
