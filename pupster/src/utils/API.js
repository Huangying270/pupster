import axios from "axios";
const RANDOMURL = "https://dog.ceo/dog-api/documentation/random";
const BREEDURL = "https://dog.ceo/api/breed/";

export default {
  random: function() {
    return axios.get(RANDOMURL);
  },

  breed: function (query) {
    return axios.get(BREEDURL + query + "/images");
  }

};