const bannerRepository = require("./repository");
const fs = require("fs");
const path = require("path");
const genericService = require("../../libraries/utils/genericService");

module.exports = {
  ...genericService(bannerRepository),

  create: async (req) => {
    if (req.files?.banner_images) {
      req.body.banner_images = req.files.banner_images.map((file) => file.filename);
    }

    return await bannerRepository.create(req.body);
  },

  update: async (req) => {
    const id = req.params.id;

    const existingBanner = await bannerRepository.findById(id);
    if (!existingBanner) {
      if (req.files?.banner_images) {
        req.files.banner_images.forEach((file) => {
          const filePath = path.join(__dirname, `../../../public/upload/banner/${file.filename}`);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        });
      }

      return null;
    }

    if (req.files?.banner_images) {
      req.body.banner_images = req.files.banner_images.map((file) => file.filename);
    }

    return await bannerRepository.update(id, req.body);
  },
};
