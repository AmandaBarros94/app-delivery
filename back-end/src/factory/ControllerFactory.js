const { StatusCodes } = require('http-status-codes');

module.exports = class ControllerFactory {
  constructor(service) {
    this.service = service;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.delete = this.delete.bind(this);
  }
  
  async getAll(_req, res) {
    const response = await this.service.getAll();

    res.status(StatusCodes.OK).json(response);
  }

  async create(req, res) {
    const response = await this.service.create(req.body);

    res.status(StatusCodes.CREATED).json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    await this.service.delete(id);

    return res.status(StatusCodes.OK).end();
  }
};
