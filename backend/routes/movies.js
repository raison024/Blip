const router = require('express').Router();
let Movie = require('../models/movies.model');

router.route('/').get((req, res) => {
    Movie.find()
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const imglink = req.body.imglink;
    const desc = req.body.desc;
    const embed = req.body.embed;
    const cat = req.body.cat;
    const year = req.body.year;
    const rating = req.body.rating;

    const newMovie = new Movie({
        title,
        imglink,
        desc,
        embed,
        cat,
        year,
        rating
    });

    newMovie.save()
        .then(() => res.json('Movie added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/addmovie").post((req,res)=>{
  const title = req.body.title;
  const imglink = req.body.imglink;
  const desc = req.body.desc;
  const embed = req.body.embed;
  const cat = req.body.cat;
  const year = req.body.year;
  const rating = req.body.rating;
  User.findOne({title:title},(err,movies)=>{
      if(movies){
          res.send({message:"Movie already exists!"})
      }else {
          const movies = new Movie({title,imglink,desc,embed,cat,year,rating})
          movies.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"sucessfull"})
              }
          })
      }
  })
});

router.route("/createmovie").post((req,res)=>{
  const title = req.body.title;
  const imglink = req.body.imglink;
  const desc = req.body.desc;
  const embed = req.body.embed;
  const cat = req.body.cat;
  const year = req.body.year;
  const rating = req.body.rating;
  Movie.findOne({title:title},(err,movies)=>{
      if(movies){
          res.send({message:"Movie already exists"})
      }else {
          const movies = new Movie({title,imglink,desc,embed,cat,year,rating})
          movies.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"sucessfull"})
              }
          })
      }
  })
});

router.route('/:id').get((req, res) => {
    Movie.findById(req.params.id)
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json('Error: ' + err));
});
  
  router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
      .then(() => res.json('Movie deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Movie.findById(req.params.id)
      .then(movie => {
        movie.title = req.body.title;
        movie.imglink = req.body.imglink;
        movie.desc = req.body.desc;
        movie.embed = req.body.embed;
        movie.cat = req.body.cat;
        movie.year = req.body.year;
        movie.rating = req.body.rating;
  
        movie.save()
          .then(() => res.json('Movie updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('updatemov/:id').post((req, res) => {
    const Movie = new Movie({
      _id: req.params.id,
      title: req.body.title,
      imglink: req.body.imglink,
      desc: req.body.desc,
      embed: req.body.embed,
      cat: req.body.cat,
      year: req.body.year,
      rating: req.body.rating
    });
    Movie.updateOne({_id: req.params.id}, Movie).then(
      () => {
        res.status(201).json({
          message: 'Movie updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

module.exports = router;