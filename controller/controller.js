const tasksDB = require("../model/model");
const { ObjectId } = require("mongodb");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const task = new tasksDB({
    title: req.body.title,
    description: req.body.description,
    dateTime: req.body.dateTime,
    reminder: req.body.reminder,
  });

  task
    .save(task)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Some error occurred while create API called`,
      });
    });
};

exports.getAll = (req, res) => {
  console.warn("req query", req.query);

  tasksDB
    .find(req.query)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Some error occurred while get API called`,
      });
    });
};

exports.getTask = (req, res) => {
  const id = req.params.id;
  const query = req.query;
  tasksDB
    .findById({ _id: id, title: query.title })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `id: ${id} Task not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `Some error occurred while get task by ID API called`,
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const id = req.params.id;
  tasksDB
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `id: ${id} Task not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Some error occurred while update API called`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  tasksDB
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `id: ${id} Task not found`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `Some error occurred while delete API called`,
      });
    });
};
