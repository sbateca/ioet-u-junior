import { jest } from "@jest/globals";
import { get_movie_by_id } from "../javascript/get-movie.js";

describe("get_movie_by_id", () => {
  const expectedMovieData = {
    results: { primaryImage: { url: "http://mockUrl" } },
  };
  it("fetches movies from the API", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      text: jest.fn().mockResolvedValue(JSON.stringify(expectedMovieData)),
    });
    const movie = await get_movie_by_id();
    expect(global.fetch).toHaveBeenCalled();
    expect(movie).toEqual(expectedMovieData.results);
  });

  it("handles errors when fetching movie by id", async () => {
    const errorMessage = "Failed to fetch movie by id";
    global.fetch = jest.fn().mockRejectedValue(new Error(errorMessage));
    await expect(get_movie_by_id().catch((error) => new Error(error.errorMessage)));
  });
});
