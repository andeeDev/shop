
const ctgLoader = async () => {
    const res = await fetch('http://localhost:80/categories',
    {
        method: 'GET'
    });
    const ctgList = (await res.json()).data;
    /* categoriesPromise.then((result) => {
        console.log(result);
    }) */
    /* categoriesJson.json().then(
        (data) => {
            console.log(data);
        }
    ) */
   console.log(ctgList[0]);

}
export default ctgLoader;