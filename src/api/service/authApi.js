import client from "../client";

export const login = (data) => client.post("/login", data);
export const logout = () => client.get("/logout");