const shortid = require("shortid");
const mongoose=require("mongoose")

const shortenUrlsSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortid.generate
    }
});

const ShortenUrls = mongoose.model("ShortenUrls", shortenUrlsSchema);

module.exports = ShortenUrls;
