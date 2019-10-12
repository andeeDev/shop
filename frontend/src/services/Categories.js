import send from './api';

const getAllCategories = () => {
    return send('/categories', 'get');
    //const res =
    /*let data1;
    res.then((data) => {
        console.log("categories = ", data.data.data);
        data1 =  data.data.data;
        return data1;
    }).catch((error) => {
        console.log(error);
        return 6;

    });
    console.log(data1);
    return data1;*/
};
export default getAllCategories;



