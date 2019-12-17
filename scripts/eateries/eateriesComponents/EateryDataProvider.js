import Settings from "../../Settings.js";

let eateryCollection = [];

export const UseEateries = () => eateryCollection.slice();

export const saveEateries = eatery => {
  return fetch(`${Settings.localEateriesAPI}`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(eatery)
  }).then(getEateries);
};

export const getEateries = () => {
  return fetch(`${Settings.eateries}`)
    .then(response => response.json())
    .then(parsedEateries => {
      eateryCollection = parsedEateries.slice();
    });
};
