
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Kas } = require("./models");
const { KasFilter } = require("./filters");

const KasControllerList =  async (req, res) => {
  try {
    const results = Kas.find(KasFilter(req));
    return LibPaginationResponse(req, res, results);

  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KasControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "KasControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KasControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "KasControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KasControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "KasControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KasControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "KasControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  KasControllerList,
  KasControllerCreate,
  KasControllerDetail,
  KasControllerUpdate,
  KasControllerDelete,
};
