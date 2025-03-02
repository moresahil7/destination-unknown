exports.file1 = (req, res, next) => {
  return res.status(200).json({ message: "hello world" });
};
