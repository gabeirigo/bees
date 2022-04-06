import { AxiosResponse } from "axios";
import React, { useEffect, useState } from 'react';
import Badge from "../../components/Badge";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Brewery from "../../models/Brewery";
import BreweriesService from "../../services/BreweriesService";
import {
  chartSquareBarIcon,
  locationMarkerIcon,
  phoneIcon,
  trashIcon
} from '../../components/Icons';
import './styles.scss';

const Breweries: React.FC = () => {

  const [breweries, setBreweries] = useState<Brewery[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await BreweriesService.getBreweries() as Brewery[];
    setBreweries(data);
  }

  async function deleteItem(id: number) {
    const breweriesWithoutSelectedItemForDeletion = breweries.filter((element: Brewery) => element.id !== id);

    setBreweries([...breweriesWithoutSelectedItemForDeletion]);
  }

  return (
    <main className="breweries">
      <Header></Header>
      <section className="breweries__content">
        {
          breweries.length > 0 && breweries.map((element: Brewery) => {
            return (
              <Card key={`brewery__${element.id}`}>
                <h2 className="breweries__card-title">{element.name}</h2>

                <p className="breweries__card-address">{element.street}</p>
                <p className="breweries__card-address">{`${element.state} - ${element.city}`}</p>

                <div className="breweries__card-badges-container">
                  {element.brewery_type && (<Badge icon={chartSquareBarIcon} name={element.brewery_type}></Badge>)}

                  {element.postal_code && (<Badge icon={locationMarkerIcon} name={element.postal_code}></Badge>)}

                  {element.phone && (<Badge icon={phoneIcon} name={element.phone}></Badge>)}
                </div>

                <button
                  className="breweries__card-delete-button"
                  onClick={() => deleteItem(element.id)}
                >
                  {trashIcon}
                </button>
              </Card>
            )
          })
        }
      </section>
    </main>
  );
}

export default Breweries;