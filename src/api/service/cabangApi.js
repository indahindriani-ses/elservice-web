import client from "../client";

export const getCabangs = () => client.get("/cabangs");
export const getCabangById = (id) => client.get(`/cabangs/${id}`);
export const createCabang = (data) => client.post("/cabang", data);
export const updateCabang = (id, data) => client.put(`/cabang/${id}`, data);
export const deleteCabang = (id) => client.delete(`/cabang/${id}`);