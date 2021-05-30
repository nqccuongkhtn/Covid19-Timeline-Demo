import { getCountry } from './countries'

const toGeo = (incident, estimate = false) => {
    const country = getCountry(incident.country);
    if(!country){
        //console.error(`Could not find country ${incident.countrycode} ${incident.countrylabel}`);
        return null;
    }

    const total = parseInt(incident.cases) || 0;
    const recovered = !estimate ? parseInt(incident.recovered) || 0 : parseInt(incident.estimateRecovered) || 0;
    const deaths = parseInt(incident.deaths) || 0;

    return {
        type: "Feature",
        properties: {
            mag: total - recovered - deaths,
            place: incident.country,
        },
        geometry: {
            type: "Point",
            coordinates: [
                country.longitude,
                country.latitude,
            ]
        },
        id: incident.country,
    }
}

export { toGeo }