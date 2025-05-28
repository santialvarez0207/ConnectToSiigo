import '../config/siigo.init.js';   
import { SiigoApi } from '../config/siigo.init.js';

const ProductApi = new SiigoApi.ProductApi();
const apiGroups = new SiigoApi.AccountGroupApi();

export async function getAllProducts() {
  const { data } = await ProductApi.getProducts();
  return data;
}


export async function getProductById(id) {
  const { data } = await ProductApi.getProduct(id);
  return data;
}


export async function createProduct(payload) {
  const { data } = await ProductApi.createProduct(payload);
  return data;
}


export async function updateProduct(id, payload) {
  const { data } = await ProductApi.updateProduct(id, payload);
  return data;
}

export async function deleteProduct(id) {
  const { data } = await ProductApi.deleteProduct(id);
  return data;
}

export function filterByCategory(categoryId) {
   let products = getAllProducts() 
  return products.filter(p => p?.item_category?.id === categoryId);
}

export async function getAllAccountGroups(categoryId) {
    const {data} = await apiGroups.getAccountGroups();
  return data;
}
