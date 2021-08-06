import { renderHook } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";

import useAPI from "./useAPI";

import { axiosInstance } from "../config";

let mock;

afterAll(() => {
  mock.restore(); // restore the original adapter, i.e, remove the mocking behavior
  mock.reset(); // reset all mock handlers that were added with "onGet"
});

describe("useAPI hook", () => {
  it("should fetch data from API successfully with correct configuration", async () => {
    mock = new MockAdapter(axiosInstance); // create a mock out of "axiosInstance"

    // prepare a mocked return data
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
    mock.onGet(url).reply(200, mockData); // simulate a successful GET request using status code of "200" and "mockData" as response data

     // simulate invocation of hook as if it is rendered within a component
     // by the help of "renderHook" provided by "@testing-library/react-hooks"
     // extract "result" and "waitForNextUpdate" from "renderHook" return
    const { result, waitForNextUpdate } = renderHook(() => useAPI({}));

    /**
     * Note that "result" given above has a property called "current" and "result.current" has 
     * the exact shape with the return value of "useAPI" hook.
     * Referring to "/src/hooks/useAPI.js" file, it can be seen that it returns an array object, 
     * which is "[apiData, isLoading, isError]".
     */

    expect(result.current[0]).toBeUndefined(); // expect that for the 1st render, there is no available API data
    expect(result.current[1]).toBeTruthy(); // expect that for the 1st render, "isLoading" status is true
    expect(result.current[2]).toBeFalsy(); // expect that for the 1st render, "isError" status is false

    await waitForNextUpdate(); // simulate waiting for the component to re-render

    expect(result.current[0]).toEqual(mockData); // expect that for the next render, GET request is successful and result is eqeual to "mockData"
    expect(result.current[1]).toBeFalsy(); // expect that for the next render, "isLoading" status is false
    expect(result.current[2]).toBeFalsy(); // expect that for the next render, "isError" status is false
  });
});
