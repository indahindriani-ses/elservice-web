import client from "../client";

export const getOperators = () => client.get("/operators");