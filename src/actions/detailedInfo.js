import uuid from "uuid";
import database from "../firebase/firebase";
import { callbackify } from "util";

// ADD_DETAILED_INFO
export const addDetailedInfo = detailedInfo => ({
  type: "ADD_DETAILED_INFO",
  detailedInfo
});

export const startAddDetailedInfo = (detailedInfoData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      address,
      companyName,
      contact,
      contactPhone,
      description,
      jobType,
      location,
      moreInfo = "",
      publicationDate,
      publishedDate,
      role,
      salary,
      scholarity,
      summary,
      title,
      lat,
      lng
    } = detailedInfoData;

    const detailedInfo = {
      address,
      companyName,
      contact,
      contactPhone,
      description,
      jobType,
      location,
      moreInfo,
      publicationDate,
      publishedDate,
      role,
      salary,
      scholarity,
      summary,
      title,
      lat,
      lng
    };

    return database
      .ref(`users/${uid}/detailedInfos`)
      .push(detailedInfo)
      .then(ref => {
        dispatch(addDetailedInfo({ id: ref.key, ...detailedInfo }));
      });
  };
};

// REMOVE_DETAILED_INFO
export const removeDetailedInfo = ({ id } = {}) => ({
  type: "REMOVE_DETAILED_INFO",
  id
});

export const startRemoveDetailedInfo = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/detailedInfos/${id}`)
      .remove()
      .then(() => {
        dispatch(removeDetailedInfo({ id }));
      });
  };
};

// EDIT_DETAILED
export const editDetailedInfo = (id, updates) => ({
  type: "EDIT_DETAILED_INFO",
  id,
  updates
});

export const startEditDetailedInfo = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/detailedInfos/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editDetailedInfo(id, updates));
      });
  };
};

// SET_DETAILED_INFOS
export const setDetailedInfos = detailedInfos => ({
  type: "SET_DETAILED_INFOS",
  detailedInfos
});

export const startSetDetailedInfos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/detailedInfos`)
      .once("value")
      .then(snapshot => {
        const detailedInfos = [];

        snapshot.forEach(childSnapshot => {
          detailedInfos.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        console.log("setDetailedInfos", detailedInfos);

        dispatch(setDetailedInfos(detailedInfos));
      });
  };
};
