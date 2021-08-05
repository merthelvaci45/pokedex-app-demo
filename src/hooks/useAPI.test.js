import { renderHook } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";

import useAPI from "./useAPI";

import { axiosInstance } from "../config";
import { API_METHODS } from "../utils";

describe("useAPI hook", () => {
  it("should fetch data from API successfully", async () => {
    const mock = new MockAdapter(axiosInstance);

    const mockData = {
      count: 1,
      next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
      preivous: null,
      results: [
        {
          name: "bulbasaur",
          url: "https://pokeapi.co/api/v2/pokemon/1/",
        },
      ],
    };

    const url = "https://pokeapi.co/api/v2/pokemon/";
    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useAPI({}));

    expect(result.current[0]).toBeUndefined();
    expect(result.current[1]).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current[0]).toEqual(mockData);
    expect(result.current[1]).toBeFalsy();
  });
});
