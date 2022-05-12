import axiosClient from "./axiosClient";

const CourseApi = {
    getAll: (params) =>{
        const url = 'MonHoc/getAll';
        return axiosClient.get(url);
    },
    getOne: (params) =>{
        const url = `MonHoc/getOne?Id=${params}`
        return axiosClient.get(url, {params});
    }
    
}

export default CourseApi;