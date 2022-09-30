module.exports = class ServiceFactory {
  constructor(model) {
    this.model = model;
  }

  getAll() {
    return this.model.findAll();
  }

  delete(id) {
    return this.model.destroy({ where: { id } });
  }
};
