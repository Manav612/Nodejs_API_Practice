const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const res = await this.model.create(data);
      return res;
    } catch (error) {
      Logger.error("Something went wrong in the crud repo : create");
      throw error;
    }
  }
  async destroy(data) {
    try {
      const res = await this.model.distroy({
        where: {
          id: data,
        },
      });
      return res;
    } catch (error) {
      Logger.error("Something went wrong in the crud repo : create");
      throw error;
    }
  }
  async get(data) {
    try {
      const res = await this.model.findByPk(data);
      return res;
    } catch (error) {
      Logger.error("Something went wrong in the crud repo : create");
      throw error;
    }
  }
  async getAll(data) {
    try {
      const res = await this.model.findAll();
      return res;
    } catch (error) {
      Logger.error("Something went wrong in the crud repo : create");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const res = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return res;
    } catch (error) {
      Logger.error("Something went wrong in the crud repo : create");
      throw error;
    }
  }
}

module.exports = CrudRepository;
