import axios from "axios";
import { toast } from "react-toastify";
import { setPromo } from "../reducers/promoReducers";
import { setPromoResult } from "../reducers/searchFlightReducers";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const url = import.meta.env.VITE_BASE_URL;

export const getPromos = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${url}/tickets?limit=10&page=1&promo=true`
    );
    dispatch(setPromo(response.data.data.tickets));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      return;
    }
    console.error(error.message);
  }
};

export const getPromoById =
  (ticketId, navigate, setLoading) => async (dispatch) => {
    console.log("ticketId", ticketId);
    setLoading(true);
    try {
      const response = await axios.get(`${url}/tickets/${ticketId}`);
      console.log("by id", response.data.data);
      dispatch(setPromoResult(response.data.data));
      setLoading(false);
      navigate(`/hasil-pencarian/promo/${ticketId}`);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.error(error.message);
        return;
      }
      console.error(error.message);
    }
  };
