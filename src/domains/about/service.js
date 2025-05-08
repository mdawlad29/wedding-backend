const genericService = require("../../libraries/utils/genericService");
const aboutRepository = require("./repository");

module.exports = {
  ...genericService(aboutRepository),
  create: async (req) => {
    if (req.file) {
      req.body.about_image = req.file.filename;
    }

    return await aboutRepository.create(req.body);
  },

  update: async (req) => {
    const id = req.params.id;

    const existingAbout = await aboutRepository.findById(id);
    if (!existingAbout) {
      return null;
    }

    if (req.file) {
      req.body.about_image = req.file.filename;
    }

    return await aboutRepository.update(id, req.body);
  },
};
