// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'


export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    selectedCurrency: 'BTC',
    selectedFormat: 'HH:mm',
    reports: [],
    revenueSummary: {},
    revenueSummaryAllocation: [],
    revenueSummaryDistribution: [],
    heatMapData: []
  },
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload
    },
    setSelectedFormat: (state, action) => {
      state.selectedFormat = action.payload
    },
    setRevenueReports: (state, action) => {
      state.reports = action.payload
    },
    setRevenueSummary: (state, action) => {
      state.revenueSummary = action.payload
    },
    setRevenueSummaryAllocation: (state, action) => {
      state.revenueSummaryAllocation = action.payload
    },
    setRevenueSummaryDistribution: (state, action) => {
      state.revenueSummaryDistribution = action.payload
    },
    setHeatMapData: (state, action) => {
      state.heatMapData = action.payload
    }
  }
})

export const { setSelectedCurrency, setRevenueReports, setRevenueSummary, setSelectedFormat,
  setRevenueSummaryAllocation, setRevenueSummaryDistribution, setHeatMapData } = dashboardSlice.actions

export default dashboardSlice.reducer
