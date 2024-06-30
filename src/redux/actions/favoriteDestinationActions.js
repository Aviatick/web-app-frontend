import axios from "axios";
import { toast } from "react-toastify";
import {
  setFavDestinations,
  setFavDestinationsByFilter,
} from "../reducers/favoriteDestinationReducers";
import {
  setDepartureResults,
  setFavDestinationResults,
} from "../reducers/searchFlightReducers";

const url = import.meta.env.VITE_BASE_URL;

export const getFavDestinations = () => async (dispatch) => {
  try {
    const response = await axios.get(`${url}/flights/favorite?page=1&limit=10`);

    console.log("fav", response.data.data);
    dispatch(setFavDestinations(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      return;
    }
    console.error(error.message);
  }
};

export const getFavDestinationsByFilter = (continent) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${url}/flights/favorite?arrivalContinent=${continent}&page=1&limit=5`
    );

    console.log("continent", response.data.data);
    dispatch(setFavDestinationsByFilter(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      return;
    }
    console.error(error.message);
  }
};

export const getFavDestinationById =
  (ticketId, navigate, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const results = await Promise.all(
        ticketId.map(async (id) => {
          const response = await axios.get(`${url}/tickets/${id}`);
          return response.data.data;
        })
      );
      dispatch(setFavDestinationResults(results));
      setLoading(false);
      navigate("/hasil-pencarian/destinasi");
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.error(error.message);
        return;
      }
      console.error(error.message);
    }
  };
