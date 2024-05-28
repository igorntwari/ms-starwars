const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const swapi = require('../apis/swapi');
const starwars = require('../controllers/starwars');

const swapiFilmListMock = require('../mocks/swapi/film_list.json');
const swapiPeopleMock = require('../mocks/swapi/people.json');
const swapiFilmMock = require('../mocks/swapi/film.json');
const swapiPlanetMock = require('../mocks/swapi/planet.json');
const swapiStarshipMock = require('../mocks/swapi/starship.json');
const swapiVehicleMock = require('../mocks/swapi/vehicle.json');
const swapiSpeciesMock = require('../mocks/swapi/species.json');
const starwarsFilmListMock = require('../mocks/starwars/film_list.json');
const starwarsFilmMock = require('../mocks/starwars/film.json');

describe("Film-List", () => {
  afterEach(() => {
    swapi.films.restore();
  });

  it("it should return the list of all the movies when called", async () => {
    sinon.stub(swapi, "films").returns(swapiFilmListMock);
    const response = await starwars.filmList();
    expect(response).to.deep.equal(starwarsFilmListMock);
  });
});

describe("Film", () => {
  afterEach(() => {
    swapi.film.restore();
    swapi.people.restore();
  });

  it("it should return all the metadata about the film when called", async () => {
    const filmId = "1";
    const peopleId = "1";
    const planetId = "1";
    const starshipId = "2";
    const vehicleId = "4";
    const speciesId = "1";
    sinon
      .stub(swapi, "film")
      .withArgs(filmId)
      .resolves(swapiFilmMock);
    sinon
      .stub(swapi, "people")
      .withArgs(peopleId)
      .resolves(swapiPeopleMock);
    sinon
      .stub(swapi, "planet")
      .withArgs(planetId)
      .resolves(swapiPlanetMock);
    sinon
      .stub(swapi, "starship")
      .withArgs(starshipId)
      .resolves(swapiStarshipMock);
    sinon
      .stub(swapi, "vehicle")
      .withArgs(vehicleId)
      .resolves(swapiVehicleMock);
    sinon
      .stub(swapi, "species")
      .withArgs(speciesId)
      .resolves(swapiSpeciesMock);
      
      const response = await starwars.film(filmId);
      expect(response).to.deep.equal(starwarsFilmMock);
  });
});
