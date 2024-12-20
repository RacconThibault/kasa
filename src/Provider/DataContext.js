import React, { createContext, useState, useEffect } from 'react';

// Import des fichiers JSON
import housingData from '../datas/logements.json';
import aboutData from '../datas/about.json';

// Création du contexte
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [housing, setHousing] = useState([]);
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d'une API avec un délai
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simule un délai de 500ms
        setHousing(housingData);
        setAbout(aboutData);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ housing, about, loading }}>
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => useContext(DataContext);