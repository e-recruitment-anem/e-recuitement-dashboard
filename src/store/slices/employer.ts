import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ManageEmployerState } from "../../helpers/types";

export const initialState: ManageEmployerState = {
  error: false,
  success: false,
  msg: "",
  loading: false,
  employers: [],
  employer: {},
  offers: [],
  tempEmployer: {},
};

const employer = createSlice({
  name: "employer",
  initialState,
  reducers: {
    // eslint-disable-next-line
    fetchEmployers: (state) => {
      state.loading = true;
    },

    // eslint-disable-next-line
    fetchEmployersSuccess: (state, { payload }: PayloadAction<any>) => {
      state.employers = payload.employers;
      state.loading = false;
      state.error = false;
    },

    fetchEmployersError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.employers = [];
      state.loading = false;
    },

    createEmployer: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.tempEmployer = {
        password: payload.password,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        agencyId: 5,
        name: payload.name,
        postalCode: payload.postalCode,
        fax: payload.fax,
        biography: payload.biography,
        mainActivity: payload.mainActivity,
        state: 1,
      };
    },

    // eslint-disable-next-line
    createEmployerSuccess: (state, { payload }: PayloadAction<string>) => {
      state.tempEmployer = {};
      state.success = true;
      state.msg = payload;
      state.loading = false;
      state.error = false;
    },

    createEmployerError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.success = false;
      state.tempEmployer = {};
      state.loading = false;
    },

    // Fetch Job employer data

    fetchEmployer: (state) => {
      state.loading = true;
    },

    fetchEmployerSuccess: (state, { payload }: PayloadAction<any>) => {
      state.employer = payload.employer;
      state.tempEmployer = {};
      state.loading = false;
      state.error = false;
    },

    fetchEmployerError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.tempEmployer = {};
      state.error = true;
      state.loading = false;
    },

    // fetch employer offers
    fetchEmployerOffers: (state) => {
      state.loading = true;
    },

    fetchEmployerOffersSuccess: (state, { payload }: PayloadAction<any>) => {
      state.offers = payload.offers;
      state.tempEmployer = {};
      state.loading = false;
      state.error = false;
    },

    fetchEmployerOffersError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.tempEmployer = {};
      state.error = true;
      state.loading = false;
    },

    // fetch employer offers
    fetchAllOffers: (state) => {
      state.loading = true;
    },

    fetchAllOffersSuccess: (state, { payload }: PayloadAction<any>) => {
      state.offers = payload.offers;
      state.tempEmployer = {};
      state.loading = false;
      state.error = false;
    },

    fetchAllOffersError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.tempEmployer = {};
      state.error = true;
      state.loading = false;
    },

    // Create job offer
    createOffre: (state, { payload }: PayloadAction<any>) => {
      state.loading = true;
      state.tempEmployer = {
        title: payload.title,
        positionsNumber: payload.positionsNumber,
        avaialablePositionsNumber: payload.avaialablePositionsNumber,
        jobTitle: payload.jobTitle,
        workAddress: payload.workAddress,
        minAge: payload.minAge,
        maxAge: payload.maxAge,
        mobility: payload.mobility,
        duration: payload.duration,
        milltarySituation: payload.milltarySituation,
        contractType: payload.contractType,
        description: payload.description,
        skills: null,
        close: null,
        gender: null,
        closedAt: null,
        qualificationLevel: null,
        educationLevel: null,
        familySituation: 'SINGLE',
        deviceEligibilty: null,
        nightWork: null,
        teamWork: null,
        residencyCity: null,
        languages: null,
        accomodation: null,
        transport: null,
        restauration: null,
      };
    },

    // eslint-disable-next-line
    createOffreSuccess: (state, { payload }: PayloadAction<string>) => {
      state.tempEmployer = {};
      state.success = true;
      state.msg = payload;
      state.loading = false;
      state.error = false;
    },

    createOffreError: (state, { payload }: PayloadAction<string>) => {
      state.msg = payload;
      state.error = true;
      state.success = false;
      state.tempEmployer = {};
      state.loading = false;
    },
  },
});

export const {
  fetchEmployers,
  fetchEmployersSuccess,
  fetchEmployersError,
  createEmployer,
  createEmployerSuccess,
  createEmployerError,
  fetchEmployer,
  fetchEmployerSuccess,
  fetchEmployerError,
  createOffre,
  createOffreSuccess,
  createOffreError,
  fetchAllOffers,
  fetchAllOffersSuccess,
  fetchAllOffersError
} = employer.actions;

export default employer.reducer;
