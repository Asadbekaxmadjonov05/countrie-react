import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Carusel from './components/Carusel/Carusel';

function App() {
  const allCountries = [
    {
      id: 1,
      name: "Wallis and Futuna",
      capital: "Mata-Utu",
      population: 11750,
      flag: "https://flagcdn.com/wf.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 2,
      name: "Iceland",
      capital: "Reykjavik",
      population: 366425,
      flag: "https://flagcdn.com/is.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 3,
      name: "Luxembourg",
      capital: "Luxembourg",
      population: 632275,
      flag: "https://flagcdn.com/lu.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 4,
      name: "Mali",
      capital: "Bamako",
      population: 20250834,
      flag: "https://flagcdn.com/ml.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 5,
      name: "Comoros",
      capital: "Moroni",
      population: 869595,
      flag: "https://flagcdn.com/km.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 6,
      name: "Australia",
      capital: "Canberra",
      population: 25687041,
      flag: "https://flagcdn.com/au.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 7,
      name: "Estonia",
      capital: "Tallinn",
      population: 1331057,
      flag: "https://flagcdn.com/ee.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 8,
      name: "Canada",
      capital: "Ottawa",
      population: 38005238,
      flag: "https://flagcdn.com/ca.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 9,
      name: "Belarus",
      capital: "Minsk",
      population: 9398861,
      flag: "https://flagcdn.com/by.svg",
      isLiked: false,
      isBasket: false
    },
    {
      id: 10,
      name: "Guyana",
      capital: "Georgetown",
      population: 786559,
      flag: "https://flagcdn.com/gy.svg",
      isLiked: false,
      isBasket: false
    }
  ]
  const [countries, setCountries] = useState(allCountries)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <Header setIsLoading={setIsLoading} countries={countries} setCountries={setCountries} />
      <main className=' bg-[#FAFAFA] dark:bg-[#202C36] pt-[50px]'>
        <Carusel />
        <Hero isLoading={isLoading} setIsLoading={setIsLoading} allCountries={allCountries} countries={countries} setCountries={setCountries} />
      </main>

    </>
  );
}

export default App;