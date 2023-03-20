import axios from 'axios';
import { defineStore } from 'pinia';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default defineStore('AdminAllProductsStore',{
    state:() => ({
        allProducts:[]
    }),
    actions:{
        getAllProducts(){
            axios.get(`${VITE_URL}api/${VITE_PATH}/admin/products/all`)
            .then((res) => {
                console.log(res);
                this.allProducts=res.data.products;
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
})