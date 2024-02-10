import { jest } from "@jest/globals";
import { get_movies } from "../javascript/get-movies.js";

describe("get_movies", () => {
  const expectedMoviesData = {
    results: [
      { primaryImage: { url: "http://mockUrl" } },
      { primaryImage: { url: "http://mockUrl" } },
      { primaryImage: { url: "http://mockUrl" } },
      { primaryImage: { url: "http://mockUrl" } },
    ],
  };
  it("fetches movies from the API", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      text: jest.fn().mockResolvedValue(JSON.stringify(expectedMoviesData)),
    });
    const movies = await get_movies();
    expect(global.fetch).toHaveBeenCalled();
    expect(movies).toEqual(expectedMoviesData.results);
  });

  it("handles errors when fetching movies", async () => {
    const errorMessage = "Failed to fetch movies";
    global.fetch = jest.fn().mockRejectedValue(new Error(errorMessage));
    await expect(get_movies().catch((error) => new Error(error.errorMessage)));
  });
});
