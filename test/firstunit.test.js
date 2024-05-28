const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const swapi = require("../apis/swapi.js");
const starwars = require("../controllers/starwars.js");
const swapiFilmListMock = require("../mocks/swapi/film_list.json");
const starwarsFilmListMock = require("../mocks/starwars/film_list.json");

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
