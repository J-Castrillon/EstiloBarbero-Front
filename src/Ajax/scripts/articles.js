import { Global } from "../../helpers/global";
import { ajaxConfig } from "../configs/ajaxConfig";

export const getAll = async (url) => {
  try {
    return await fetch(`${Global.url}/${url}`, { method: "GET" })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        return data.query;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const createUpdate = async (url, body, method, files = false) => {
  try {
    return await fetch(
      `${Global.url}/${url}`,
      { method, headers: files === false ? ajaxConfig.headers : {}, body: files === false ? JSON.stringify(body) : body },
    )
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error
      });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (url) => {
  try {
    return await fetch(`${Global.url}/${url}`, {
      method: 'DELETE',
      headers: ajaxConfig.headers,
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
