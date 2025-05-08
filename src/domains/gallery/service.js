const genericService = require("../../libraries/utils/genericService");
const galleryRepository = require("./repository");

module.exports = {
  ...genericService(galleryRepository),

  create: async (req) => {
    if (req.files?.images) {
      req.body.images = req.files.images.map((file) => file.filename);
    }

    return await galleryRepository.create(req.body);
  },
};
