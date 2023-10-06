import {configureStore} from '@reduxjs/toolkit'
import recordReducer from './lib/recordSlide'

export default configureStore ({
  reducer: {
    record:  recordReducer,
  },
});