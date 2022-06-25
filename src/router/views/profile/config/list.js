import Vue from "vue";
export const form = {
    profile:{
        f_hospitalcode: null,
        f_vsion: null,
        f_mistion: null,
        f_policy: null,
        f_gotoKnow: null,
        f_facebook: null,
        f_twitter: null,
        f_line: null,
        f_director: null, // ผู้อำนวยการ มาจากรหัส f_contactId
        f_physician: null, // แพทย์ผู้รับผิดชอบ มาจากรหัส f_contactId
        f_responsiblePerson: null, // ผู้รับผิดชอบ มาจากรหัส f_contactId
    },
    contacts:{
        f_contactId: null,
        f_firstName: null,
        f_lastName: null,
        f_nickname: null,
        f_phone: null,
        f_email: null,
        f_line: null,
    },
    hopsital:{
        f_hospitalcode: null, 
        f_login: null,
        f_hospitalname: null,
        f_address: null,
        f_subdistrict: null,
        f_district: null,
        f_province: null,
        f_zipcode: null,
        f_latitude: null,
        f_longitude: null,
        f_zoneArea: null,
        f_bed: null,
        f_telphone: null,
        f_fax: null,
        f_type_hospital: null,
    },
};