class HomeController {
  // eslint-disable-next-line class-methods-use-this
  index(req, res) {
    res.status(200).json({
      allRight: true,
    });
  }
}

export default new HomeController();
