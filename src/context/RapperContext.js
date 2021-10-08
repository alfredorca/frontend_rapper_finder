import { useEffect, createContext, useState } from "react";

import helperApi from "../apiHelper/apiHelper";

export const RapperContext = createContext({});

const RapperProvider = ({ children }) => {
  const [rappers, setRappers] = useState([]);
  const [rapper, setRapper] = useState({
    name: "",
    picture: "",
    albums: "",
    dateOfBirth: "",
    biography: "",
    country: "",
    videos: "",
  });
  const [activeRapper, setActiveRapper] = useState('')

  useEffect(() => {
    getRappers();
  }, []);

  const getRappers = async () => {
    const response = await helperApi.get(`/rappers`);
    setRappers(response.data);
  };

  const getRapperById = async (id) => {
    const response = await helperApi.get(`/rappers/rapper/${id}`)
    setRapper(response.data);
    setActiveRapper(response.data)
  }

  const createRapper = async (obj) => {
    setRappers([obj, ...rappers])
    await helperApi.post(`/rappers/rapper`, obj)
    getRappers()
  }

  const updateRapper = async (id, obj) => {
    await helperApi.put(`/rappers/rapper/${id}`, obj);
    getRappers();
  }

  const deleteRapper = async (id) => {
    await helperApi.delete(`/rappers/rapper/${id}`)
    getRappers();
  }

  return (
    <RapperContext.Provider
      value={{
        rappers,
        deleteRapper,
        createRapper,
        setRapper,
        setRappers,
        getRapperById,
        updateRapper,
        getRappers,
        rapper, 
        activeRapper
      }}
    >
      {children}
    </RapperContext.Provider>
  );
};

export default RapperProvider;
